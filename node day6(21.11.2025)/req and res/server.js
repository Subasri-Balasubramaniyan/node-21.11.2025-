const http = require("http");

http.createServer((req, res) => {
  console.log("URL:", req.url);
  console.log("Method:", req.method);
  console.log("Headers:", req.headers);

  res.end("Check your console for request details");
}).listen(3000, () => {
  console.log("Server running on port 3000");
});
