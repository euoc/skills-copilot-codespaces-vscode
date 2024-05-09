// Create web server
// 1. Create a web server
// 2. Load express module
// 3. Create a web server object
// 4. Create a route for GET request
// 5. Create a route for POST request
// 6. Start the web server

// 1. Create a web server
// 2. Load express module
const express = require("express");

// 3. Create a web server object
const app = express();

// 4. Create a route for GET request
app.get("/comments", (req, res) => {
  // 5. Create a route for POST request
  res.send("GET request to the homepage");
});

// 6. Start the web server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});