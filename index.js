const express = require("express");
require('dotenv').config();

const app = express();

app.get("/", (req, res)=>{
    console.log("hiiii");
    res.send("Hello World");
})

app.get("/calc", (req, res)=>{
    console.log(Date() + req.ip + " ==> " + req.headers.host + req.path);
    res.send(process.env.NUMBER)
    
})

app.listen(4000, ()=>{console.log("Server Start");})

console.log(process.env.NAME);