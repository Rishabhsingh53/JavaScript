const express = require("express")
const app = express()

// this is a method provided by express that allows us what should happen 
// when a broswer gets in touch with our server or makes a get request
// the first parameter it should take is location of the get request.
// second parameter is a callback function (req,res)
// remember : "/" is the home page or root 

app.get("/",function (req,res) {
    res.send("<h1>Hello</h1>")
})   

app.get("/about",function (req,res) {
    res.send("<h1>Rishabh singh</h1> <br> Student at Thakur college of engineering and technology");
})

app.get("/contact", function (req,res) {
    res.send("contact me at <p>rishabhsingh50689@gmail.com</p>" );
})
app.listen(8000,function () {
    console.log("Server started");
})
// this will create a server and listening on the port 3000