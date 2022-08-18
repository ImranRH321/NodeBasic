// const http = require("http");
// const port = 3000;
// const hostname = "127.0.0.1";

// const myServer = http.createServer((req, res) => {
//   res.writeHead(203, { "content-type": "text/html" });

//   res.write("<h2>hello mia</h2> ");
//   res.end();
// });

// myServer.listen(port, hostname, () => {
//   console.log(`my server is running http://${hostname} :${port}`);
// });


/* 
************************pk******************** 
*/

// const http = require('http')
// const port = 4000;
// const hostname = '127.0.0.1';
// const myServer = http.createServer((req, res) => {
//     res.writeHead(210, {'content-type': 'text/html'})
//     res.write('<h1>This is simple Text</h1>')
//     res.end()
// })
// myServer.listen(port, hostname, (req, res) => {
//     console.log(`my 3d server is running https://${hostname}:${port}`);
// })

// ********************pk_code*********************

const http = require('http')
const port = 4000;

const server = http.createServer((req, res) => {
    res.writeHead(202, {'content-type': 'text/plain'})
    res.write('how are you fuker sever ')
    res.end()
},).listen(port, () => {
    console.log('server is runing ', port) ;
})

