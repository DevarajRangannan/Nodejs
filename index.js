const express = require("express");
const MongoClient = require("mongodb").MongoClient

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

app.get("/add", (req, res)=>{
    console.log(Date() + req.ip + " ==> " + req.headers.host + req.path);
    res.send("Add 1+1")
    
})

app.get("/sub", (req, res)=>{
    console.log(Date() + req.ip + " ==> " + req.headers.host + req.path);
    res.send("Sub 1-1")
    
})

app.get("/Div", (req, res)=>{
    console.log(Date() + req.ip + " ==> " + req.headers.host + req.path);
    res.send("Div 1/1")

})

app.get("/featur1", (req, res)=>{
    console.log(Date() + req.ip + " ==> " + req.headers.host + req.path);
    res.send("Feature 1")

})

app.get("/webhook", (req, res)=>{
    res.send("webhook")

})

app.get("/db", (req, res)=>{
    var url = "mongodb://localhost:27017/MongoDatabase?serverSelectionTimeoutMS=2000";  

    MongoClient.connect(url, function(err, db) {  
        if (err){
            res.send("505 Error")
            console.log("Db Not Connected");
        };  
        console.log("Database created!");  
        db.close();  
    }); 
})


app.listen(4000, ()=>{console.log("Server Start");})

console.log(process.env.NAME);
