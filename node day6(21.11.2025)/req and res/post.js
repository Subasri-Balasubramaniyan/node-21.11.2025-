const http = require("http");

http.createServer((req, res) => {
  // Set headers
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Check POST method
  if (req.method === "POST") {
    let body = "";

    // Receive data chunks
    req.on("data", chunk => {
      body += chunk.toString();
    });

    // When data is fully received
    req.on("end", () => {
      console.log("POST Body:", body);

      res.end("POST request received: " + body);
    });

  } else {
    // For GET or other requests
    res.end("Only POST supported here");
  }

}).listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
