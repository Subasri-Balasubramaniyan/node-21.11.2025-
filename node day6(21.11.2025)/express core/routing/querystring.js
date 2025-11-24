const express = require("express");
const app = express();

app.get("/search", (req, res) => {
  const { name, price } = req.query;
  res.send(`Searching for: ${name}, Price: ${price}`);
});

app.listen(3000, () => console.log("Server running on port 3000"));

/* Test in browser
http://localhost:3000/search?name=mobile&price=10000
 */