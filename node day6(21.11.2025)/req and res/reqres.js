const http = require("http");

http.createServer((req, res) => {
  // Log request details
  console.log("Requested URL:", req.url);  /* req.url -> path specified by the user eg: /home, /about, /contact*/
  console.log("Method:", req.method);  /* req.method -> HTTP methods eg: GET, PUT, POST, DELETE*/

  // Set status code & header
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Send part of the response
  res.write("Welcome to Node.js Server!\n");

  // Send dynamic response using req details
  res.write(`You visited: ${req.url}\n`);
  res.write(`Method used: ${req.method}\n`);

  // End response
  res.end("Response finished. Goodbye!");
}).listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
