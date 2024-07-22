//import the modules
const http = require("http");
const path = require("path");
const fs = require("fs");


// declare port

const PORT = 5000;

// create a server
//(req,res)=> will be called whenever there is a client request for server

const app = http.createServer((req,res)=>{
    console.log("requset url is ",req.url);
    console.log("request method is ", req.method);

});


// start the server 

app.listen(PORT,()=>{
    console.log(`Server listening on the port ${PORT}`);
});