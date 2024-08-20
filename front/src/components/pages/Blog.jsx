import React, { useEffect } from "react";
import { BlogCard } from "../ui";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { decryptBlogData, setSelectedBlog } from "../redux/slice/blogSlice";
import { setNav } from "../redux/slice/navbarSlice";
import DisplayAnimation from "../ui/DisplayAnimation";

export function BlogPage() {
  const { data } = useSelector((state) => state.blog);
  const dispatch = useDispatch();

  const fetchBlog = async () => {
    try {
      const response = await axios.get("/blog/getpost");
      dispatch(decryptBlogData(response.data.blogList));
    } catch (error) {
      console.error("Error fetching blog data:", error);
    }
  };
  const handelCardClick = (blogData) => {
    dispatch(setSelectedBlog(blogData));
    dispatch(setNav("/full-blog"));
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 flex flex-wrap justify-center items-center ">
      {data.map((d) => (
        <DisplayAnimation key={d.id}>
          <BlogCard
            author={d.author}
            content={d.content}
            coverImageUrl={d.coverImageUrl}
            images={d.images}
            created_at={d.created_at}
            title={d.title}
            onClick={() => handelCardClick(d)}
          />
        </DisplayAnimation>
      ))}
    </div>
  );
}
