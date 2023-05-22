const Blog = require("../models/blog");
const CustomError = require("../utils/customError");


exports.createBlog = async(req,res) => {
    try {
        // const {title, content} = req.body;
        console.log("in try")
        const blog = await Blog.create(req.body);

        res.status(200).json({
            message: "Blog is Up!",
            success: true,
            blog
        })
        
    } catch (error) {
        res.json({
    
            success: false,
            error
        })
        
    }
};

exports.getBlogs = async(req,res) => {
   
    try {
        const blogs = await Blog.find();

    if(blogs.length === 0){
        res.json({
            message: "There are no blogs! Upload some..",

        })
    }

    res.status(200).json({
        blogs
    });
        
    } catch (error) {
        res.json({
    
            success: false,
            error
    });

}
};

exports.getSingleBlog = async (req,res) => {
    
    try {
        const blog = await Blog.findById(req.params.id);

        if(!blog){
            res.json({
            message: "Invalid Id!",
            });
        }

        res.status(200).json({
            blog
        })
        
    } catch (error) {
        res.json({
    
            success: false,
            error
    });
    };
};

exports.updateBlog = async(req,res) => {

    // try {
        // find the blog
    const blog = await Blog.findById(req.params.id);

    if(!blog) {
        res.status(404).json({
            message: "Blog not found! Invalid Blog Id."
        })
    }

    const {title, content} = req.body;

    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      });
    
      
    res.status(200).json({
        message: "updated",
        updatedBlog
    });

    // } catch (error) {
    //     res.json({
    
    //         success: false,
    //         error
    // })};

};

exports.deleteBlog = async(req,res) => {
    

    try {
        // find the blog
    const blog = await Blog.findById(req.params.id);

    if(!blog) {
        res.status(404).json({
            message: "Blog not found! Invalid Blog Id."
        })
    }

    await Blog.findByIdAndRemove(req.params.id)

    res.status(200).json({
        message: "Blog Removed",
        blog
    });


    } catch (error) {
        res.json({
    
            success: false,
            error
    })
    }
};
