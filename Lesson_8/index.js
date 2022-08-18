/* //  **********************pk_code******************************
const http = require("http");
const fs = require("fs");
const port = 3000;
const hostname = "127.0.0.1";

const server = http.createServer((req, res) => {
  const handleReadFile = (FileLocation, statusCode) => {
    fs.readFile(FileLocation, (err, data) => {
      res.writeHead(statusCode);
      res.write(data);
      res.end();
    });
  };

  if (req.url === "/") {
    handleReadFile("./demo/index.html", 200);
  } else if (req.url === "/about") {
    handleReadFile("./demo/about.html", 200);
  } else if (req.url === "/block") {
    handleReadFile("./demo/block.html", 200);
  } else if (req.url === "/service") {
    handleReadFile("./demo/service.html", 200);
  } else if (req.url === "/dashboard") {
    handleReadFile("./demo/dashboard.html", 200);
  } else {
    handleReadFile("./demo/error.html", 402);
  }
});

server.listen(port, hostname, () => {
  console.log(`server is running http://${hostname}:${port}`);
});
 */
// *******************************pk*******************
const http = require("http");
const fs = require("fs");
const port = 3000;
const hostname = "127.0.0.1";

// 
const handleReadFile = (fileName, statusCode, req, res) => {
  fs.readFile(fileName, 'utf-8', (err, data) => {
     if(err){
      console.log(err.message);
     }
     else{
      res.writeHead(statusCode, {'content-type': 'text/html'})
      res.write(data)
      res.end()
     }
  })
}

const server = http.createServer((req, res) => {
   if(req.url === '/'){
    handleReadFile('./demo/index.html', 200, req, res)
   }
  else if(req.url === '/about'){
    handleReadFile('./demo/about.html', 200, req, res)
   }
  else if(req.url === '/block'){
    handleReadFile('./demo/block.html', 200, req, res)
   }
  else {
    handleReadFile('./demo/error.html', 402, req, res)
   }
});

server.listen(port, hostname, () => {
  console.log(`server is running http://${hostname}:${port}`);
});

