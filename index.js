const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    console.log("hiiii");
    res.send("XXX");
})

app.listen(4000, ()=>{console.log("Server Start");})
