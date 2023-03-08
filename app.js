// Require the http module
const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(req) // To see the request body
  //    To write the response
  res.setHeader('Content-Type','text/html');
  res.write('<html>')
  res.write('<head><title>My first page</title></head>')
  res.write('<body><h1>My server is running</h1></body>')
  res.write('</html>')
  res.end()

  // process.exit(); // To stop the server
});
server.listen(3000);
