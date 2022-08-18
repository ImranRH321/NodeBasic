/* const http = require("http");
const port = 3000;
const fs = require("fs");
const hostname = "127.0.0.1";
// writeHead--> status --> deyar jonno use kora hoy

const server = http.createServer((req, res) => {
  const handleReadFile = (statusCode, FileLocation) => {
    fs.readFile(FileLocation, (err, data) => {
      res.writeHead(statusCode, { "content-type": "text/html" });
      res.write(data);
      res.end()
    });
  };

  if (req.url === "/") {
    handleReadFile(200, "./views/index.html");
  } else if (req.url === "/about") {
    handleReadFile(200, "./views/about.html");
  } else if (req.url === "/contect") {
    handleReadFile(200, "./views/contect.html");
  } else {
    handleReadFile(404, "./views/error.html");
  }
});

server.listen(port, hostname, () => {
  console.log(`server is running http://${hostname}:${port} `);
});
 */


/* ***********************pk_code********************* */

const http = require("http");
const fs = require("fs");
const port = 3000;
const hostname = "127.0.0.1";

const myServer = http.createServer((req, res) => {

// 
const handleReadfile = (fileName, statusCode) => {
  fs.readFile( fileName, 'utf-8', (err,data) => {
    if(err){
      console.log(err);
    }else{
      res.writeHead(statusCode, {'content-type': 'text/html'})
      res.write(data)
      res.end()
    }
  })
}

   if(req.url === '/'){
    handleReadfile('./routes/index.html', 200)
   }else if(req.url === '/about'){
    handleReadfile('./routes/about.html', 200)
   } else if(req.url === '/contact'){
    handleReadfile('./routes/contact.html', 200)
   }else{
    handleReadfile('./routes/404.html', 402)
   }
});

myServer.listen(port, hostname, () => {
  console.log(`my server is running http://${hostname} :${port}`);
});
