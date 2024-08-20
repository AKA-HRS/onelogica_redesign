const { db } = require("../config");

const handleClientQuery = async (req, res) => {
  try {
    const { data } = req.body;
    const databaseRef = db.collection("query");
    console.log(data, new Date().toISOString());
    const status = await databaseRef.add({
      ...data,
      created_At: new Date().toISOString(),
    });
    console.log(status);
    res.status(200).json({ message: "Received query successfully" });
  } catch (err) {
    console.error("Error handling query:", err);
    res.status(500).json({
      message: "Internal server error",
      flag: "error",
    });
  }
};

const handleGetClientQuery = async (req, res) => {
  try {
    const databaseRef = db.collection("query");
    const data = await databaseRef.get();

    if (data.empty) {
      res.render("QueryList", {
        data: [],
        message: "No queries found",
        flag: "false",
      });
    } else {
      const query = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      res.render("QueryList", {
        data: query,
        message: "Queries fetched successfully",
        flag: "true",
      });
    }
  } catch (err) {
    console.error("Error fetching query:", err);
    res.status(500).json({
      message: "Internal server error",
      flag: "error",
    });
  }
};

module.exports = {
  handleClientQuery,
  handleGetClientQuery,
};
