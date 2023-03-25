const express = require("express")
const bodyParser = require("body-parser")
const app = express()

// urlencoded is used when we want to retreive data from html form 
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",function (req,res) {
    // if we want to send a file as an response we user gets in touch to home page of our project we can use sendFile method 
    // now it is important to note that we can't use relative paths we are dealing with server because the path could be different when 
    // accessed by the client or hosted on cloud storage
    res.sendFile(__dirname + "/index.html") 
    // dirname returns the path of the file entered it doesn't care where the file is located be it on the server, cloud,
    // remote server or local server.
})

app.post("/",function(req,res) {
    const n1 = parseInt(req.body.num1);
    const n2 = parseInt(req.body.num2);
    res.send("The result of the addition is:\t" + (n1 + n2));
})

// npm body - parser is used to process the data sent in http body request
app.listen(8000,function() {
    console.log("Server started !! ")
})