const express = require("express");
const path = require("path");
const cors = require("cors");
const blog = require("./router/blog");
const query = require("./router/query");
require("dotenv").config();
const app = express();
app.use(express.json());

app.use(
  cors({
    credentials: true,
    methods: ["GET", "POST"],
    origin: process.env.ORIGIN ,
  })
);

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use("/blog", blog);
app.use("/query", query);

app.listen(process.env.PORT, () => {
  console.log(`server listening at port ${process.env.PORT}`);
});
