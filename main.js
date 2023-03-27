let http = require("http");
const fs = require("fs");
const math = require("./math");
const url = require("url");
const uc = require('upper-case');

// console.log(math.resta(2, 1));
// console.log("hola aprendiendo node");

const adr = "http://localhost:8080/default.html?year=2017&month=february";
const q = url.parse(adr, true);

// console.log(q)
// console.log(q.host); //'localhost:8080'
// console.log(q.pathname); //'/default.html'
// console.log(q.search); //'?year=2017&month=february'

// const qdata = q.query; //{ year: 2017, month: 'february' }
// console.log(qdata.month); //'february'

// http
//   .createServer((req, res) => {
//     const q = url.parse(req.url, true);
//     const filename = "." + q.pathname;// /index.html /index2.html
//     fs.readFile(filename, (err, data) => {
//       try {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.write(data);
//         return res.end();
//       } catch (error) {
//         res.writeHead(404, { "Content-Type": "text/html" });
//         console.error(error);
//         return res.end("404 Not Found");
//       }
//     });
//   })
//   .listen(8080);

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(uc.upperCase("¡Hola The Bridge2!"));
  res.end();
}).listen(8080);
