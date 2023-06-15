const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    console.log("hiiii");
    res.send("Hello World");
})

app.get("/calc", (req, res)=>{
    console.log(Date() + req.ip + " ==> " + req.headers.host + req.path);
    // try{
        r = v + 0;
    // }
    // catch(err){
    //     res.send("<h1>Error</h1>");
    // }
    
})

app.listen(4000, ()=>{console.log("Server Start");})
