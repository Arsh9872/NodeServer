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

    if (req.url == "/") {
        res.writeHead(200, {"Content-Type":"text/plain"});
        res.end("This text is from backend app");
        
    }
    else if (req.url == "/api/user") {
        res.writeHead(200, {"Content-Type":"application/json"});

        // cretae a java script object to return on this url

        const user = {
            name: "AP Singh",
            gender: "Male"
        };

        // convert javascript to JSON
        res.end(JSON.stringify(user));  

        
    }

    else if (req.url == "/api/image") {

        // created the path fro the given image
        const imagePath = path.join(__dirname, "1st.png");
        console.log(imagePath);
        // fs module to read the image file and convert it into data
        fs.readFile(imagePath,(err,data)=>{
            if (err) {
                res.writeHead(404,{"Content-Type":"text/plain"});
                res.end("IMage npt found");
            }
            else{
                res.writeHead(200,{"Content-Type":"image/png"});
                res.end(data);
            }
        })
        
    }

    else if (req.url == "/api/html") {
        const htmlPath = path.join(__dirname,"contact.html");
        fs.readFile(htmlPath,(err,data)=> {
            if (err) {
                req.writeHead(404, {"Content-Type":"text/plain"});
                res.end("Content not found");
            }
            else{
                res.writeHead(200,{"Content-Type":"text/html"});
                res.end(data);
            }
        });
        
    }

});


// start the server 

app.listen(PORT,()=>{
    console.log(`Server listening on the port ${PORT}`);
});


// npm run dev == node --watch app.js  ::ref package.json