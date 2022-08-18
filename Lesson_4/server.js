// const http = require('http')
// const port = 3000;
// const hostname = '127.0.0.1'

// const myServer = http.createServer((req, res) => {
//  res.end("<h1>Hello HTML code </h2>")
// })

// myServer.listen(port, hostname, () => {
//     console.log(`my server is running http://${hostname} :${port}`);
// })

/* ***************pk_code_*************** */

const http = require('http')
const PORT = 4000;

const server = http.createServer((req, res) => {
  res.end('<h1>The project is running 4040</h1>')
})

server.listen(PORT, () => {
  console.log('server is running', PORT);
})



// ---------------------------pk_code_------------------------
// new line i pk server crate

// const http = require("http");
// const port = 3000;
// const hostname = "127.0.0.1";

// const myServer2 = http.createServer((req, res) => {
// res.end("<h1>hi server node </h1>")
// });

// myServer2.listen(port, hostname, () => {
//   console.log(
//     `My second server is running successfully http://${hostname}:${port}`
//   );
// });
