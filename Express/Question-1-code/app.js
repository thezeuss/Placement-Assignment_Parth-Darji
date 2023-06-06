const express = require("express");

const app = express();
const PORT = 3030;

const posts = require("./posts.json");

app.get("/", (req,res) => {
    res.status(200).json({
        success: true,
        message: "API"
    })
});

app.get("/posts", (req,res) => {
    res.status(200).json({posts});
});


app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT} `);
})