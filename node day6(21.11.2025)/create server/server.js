const http = require("http");

http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Welcome!");
}).listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
