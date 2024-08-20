const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const { db, bucket } = require("../config");
const { encrypt } = require("../middleware/encrypt");

const handelCreateBlog = async (req, res) => {
  try {
    const { title, content, author, coverImage } = req.body;
    const currentDate = new Date().toISOString();
    const files = req.files;

    if (!files || files.length === 0) {
      return res.status(400).send("No files were uploaded.");
    }

    const uploadPromises = files.map((file) => {
      const blob = bucket.file(`${uuidv4()}-${file.originalname}`);
      const blobStream = blob.createWriteStream({
        metadata: {
          contentType: file.mimetype,
        },
      });

      return new Promise((resolve, reject) => {
        blobStream.on("error", (err) => {
          console.error("Upload error:", err);
          reject(err);
        });

        blobStream.on("finish", async () => {
          const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${
            process.env.BUCKET_NAME
          }/o/${encodeURIComponent(blob.name)}?alt=media`;
          resolve({ name: file.originalname, url: publicUrl });
        });

        blobStream.end(file.buffer);
      });
    });

    const uploadedFiles = await Promise.all(uploadPromises);

    const coverImageUrl = uploadedFiles.find(
      (file) => file.name === coverImage
    )?.url;

    const blogData = {
      title,
      content,
      author,
      coverImageUrl,
      created_at: currentDate,
      images: uploadedFiles.map((file) => file.url),
    };

    const blogRef = db.collection("blogs").doc();
    await blogRef.set(blogData);

    res.status(200).json({
      message: "Blog post created successfully!",
      redirectUrl: "/blog",
    });
  } catch (err) {
    console.error("Error uploading files:", err);
    res.status(500).json({
      message: "Internal server error",
      redirectUrl: "/blog",
    });
  }
};

const handleGetBlogPage = (req, res) => {
  return res.render("BlogPage");
};

const handelgetAllBlogs = async (req, res) => {
  try {
    const databaseRef = db.collection("blogs");
    const data = await databaseRef.get();
    if (data.empty) res.status(204).json({ data: "", flag: "false" });
    else {
      const blogs = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const blogList = blogs.map((blog) => {
        const encryptedBlogData = encrypt(JSON.stringify(blog));
        return {
          id: blog.id,
          encryptedData: encryptedBlogData,
        };
      });
      res.status(200).json({ blogList, flag: "true" });
    }
  } catch (err) {
    console.error("Error fetching blogs:", err);
    res.status(500).json({
      message: "Internal server error",
      flag: "error",
    });
  }
};

module.exports = {
  handelCreateBlog,
  handleGetBlogPage,
  handelgetAllBlogs,
};
