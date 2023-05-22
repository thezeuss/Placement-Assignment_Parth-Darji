require("dotenv").config();
const express = require("express");
const app = express();

const connectDB = require("./config/db")


connectDB();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// importing routes
const blog = require('./routes/blog');

// routes middleware
app.use("/api/v1",blog);



app.listen(process.env.PORT, () => {
    console.log(`app is running on port: http://localhost:${process.env.PORT}`);
});
