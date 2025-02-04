const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

// Use CORS middleware
app.use(cors());

// Sample data for users (no DB used, simple in-memory data)
const users = [
    { id: "1", name: "Alice", email: "alice@example.com", address: "New York, USA", phone: "123-456-7890" },
    { id: "2", name: "Bob", email: "bob@example.com", address: "London, UK", phone: "987-654-3210" },
    { id: "3", name: "Charlie", email: "charlie@example.com", address: "Berlin, Germany", phone: "555-666-7777" },
    { id: "4", name: "Dave", email: "dave@example.com", address: "Paris, France", phone: "666-777-8888" },
    { id: "5", name: "Eve", email: "eve@example.com", address: "Toronto, Canada", phone: "444-555-6666" }
];

// Route to get all users
app.get("/users", (req, res) => {
    res.json(users);
});

// Route to get a specific user by ID
app.get("/users/:id", (req, res) => {
    const userId = req.params.id;
    const user = users.find(u => u.id === userId);
    if (user) {
        res.json(user);
    } else {
        res.status(404).send("User not found");
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});