const express = require("express");
const router = express.Router();

const { handelCreateBlog, handleGetBlogPage, handelgetAllBlogs } = require("../controllers/blog");
const upload = require("../middleware/multer");

router.post("/create", upload.array("images", 5), handelCreateBlog);
router.get("/", handleGetBlogPage);
router.get('/getpost',handelgetAllBlogs)

module.exports = router;
