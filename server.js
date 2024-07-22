//import modules required for backed / server
const { json } = require("express/lib/response");
const http = require("http");
const path = require("path");
const fs = require("fs");    //fs = file system      , cinvert image to data or abyte array

// PORT declaration
const PORT = process.env.PORT || 4000

//create server
// createServer method will take request listener sd psrsmeter
// (req,res)=>{} which is called on any incoming request
const server = http.createServer((req,res)=>{
    console.log(req.method);
    console.log(req.url);
    if(req.url=='/' || req.url=="/home"){
        res.writeHead(200,{"Content-Type":"text/plain"});   // res.writeHead(status code(if 200 means all ok),{"Content-Type":"text/plain"});
        res.end("Home page");
    }
    else if (req.url = "/api/user") {
        res.writeHead(200, {"Content-Type":"application/json"});
        const user = {name:"AP Singh", gender:"Male"};                              //req = request , res = response
        res.end(JSON.stringify(user));                                         // converting js object to JSON (case sensitive)
    }
    // localhost:4000/api/images
    else if (req.url == "/api/images") {
        console.log("listening");
        // res.writeHead(200 , {"Content-Type":"image/png"});
        const imagePath = path.join(__dirname,"/1st.png");
        fs.readFile(imagePath, (err,data)=>{
            if(err){
                
                res.end("Image not Found");
            }
            else{
                res.writeHead(200, {"Content-Type":"image/png"});
                res.end(data);
            }
        })
    }
});

server.listen(PORT, ()=>  {
    console.log(`Server listenig on port ${PORT}`);
});


// write on browser localhost:4000 or localhost:4000/ or localhost:4000/home all do same work
// after any change in the file we have to restart the server but in that case we use the command "node --watch filename" 