const http = require("http");

const server = http.createServer((req, res) => {
  
  if (req.url === "/success") {
    // ----- 200 OK -----
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("200 OK - Request successful");
  }

  else if (req.url === "/create") {
    // ----- 201 Created -----
    res.writeHead(201, { "Content-Type": "text/plain" });
    res.end(JSON.stringify({ message: "201 Created - New resource created" }));
  }

  else if (req.url === "/bad") {
    // ----- 400 Bad Request -----
    res.writeHead(400, { "Content-Type": "text/plain" });
    res.end("400 Bad Request - Invalid input");
  }

  else if (req.url === "/unauthorized") {
    // ----- 401 Unauthorized -----  /* it always shows token missing because its status code is 401 */
    res.writeHead(401, {
      "Content-Type": "text/plain",
      "Authorization": "Bearer token_required"
    });
    res.end("401 Unauthorized - Token missing");
  }

  else if (req.url === "/cookie") {
    // ----- Set Cookie -----
    res.writeHead(200, {
      "Content-Type": "text/plain",
      "Set-Cookie": "username=Suba; HttpOnly"  /* cookie name = username:Suba */
    });
    res.end("Cookie set successfully!");
  }

  else if (req.url === "/length") {
    // ----- Content-Length represents the number of characters in message-----
    const msg = "Hello, Content-Length Demo!";
    res.writeHead(200, {
      "Content-Type": "text/plain",
      "Content-Length": msg.length
    });
    res.end(msg);
  }

  else {
    // ----- 404 Not Found -----
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found - Route does not exist");
  }

});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

/* | URL             | Status | Meaning                     |
| --------------- | ------ | --------------------------- |
| `/success`      | 200    | OK                          |
| `/create`       | 201    | Created                     |
| `/bad`          | 400    | Bad Request                 |
| `/unauthorized` | 401    | Token missing               |
| `/cookie`       | 200    | Sets a cookie               |
| `/length`       | 200    | Shows Content-Length header |
| anything else   | 404    | Not Found                   |
 */