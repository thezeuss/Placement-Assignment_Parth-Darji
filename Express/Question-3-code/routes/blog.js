const express = require("express");

const { getBlogs, getSingleBlog, createBlog, updateBlog, deleteBlog } = require("../controllers/blogController");


const router = express.Router();


router.route("/blog").post(createBlog)
                     .get(getBlogs);

router.route("/blog/:id").get(getSingleBlog)
                         .put(updateBlog)
                         .delete(deleteBlog);


module.exports = router;