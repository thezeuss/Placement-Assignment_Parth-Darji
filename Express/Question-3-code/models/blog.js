const mongoose = require("mongoose");


const blogSchema = new mongoose.Schema({

    // user: {
    //     type: mongoose.Schema.ObjectId,
    //     // required: true,
    // },

    title: {
        type: String,
        required: true
    },

    content: {
        type: String,
        required: true
    },
    
    createdAt: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('Blog',blogSchema);

