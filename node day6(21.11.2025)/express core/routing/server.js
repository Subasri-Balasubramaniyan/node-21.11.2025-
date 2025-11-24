const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Temporary in-memory data
let users = [
  { id: 1, name: "Suba" },
  { id: 2, name: "Priya" }
];

// ------------------- GET -------------------
app.get("/users", (req, res) => {
  res.json({ message: "All Users", data: users });
});

// ------------------- POST -------------------
app.post("/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };
  
  users.push(newUser);
  res.json({ message: "User Created", data: newUser });
});

// ------------------- PUT -------------------
app.put("/users/:id", (req, res) => {
    /* parseInt() - It is a global function used to parse a string argument and return an integer. */
  const id = parseInt(req.params.id);
  const updatedName = req.body.name;

  const user = users.find(u => u.id === id);
  if (!user) return res.status(404).json({ message: "User not found" });

  user.name = updatedName;
  res.json({ message: "User Updated", data: user });
});

// ------------------- DELETE -------------------
app.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  users = users.filter(u => u.id !== id);
  
  res.json({ message: "User Deleted" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
