const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.get("/donate", function(req, res){
    res.sendFile(__dirname + "/donate.html");
})

app.listen(port, function(){
    console.log("Server Started at port 3000");
})
