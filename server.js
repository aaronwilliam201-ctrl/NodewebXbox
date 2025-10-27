// Import express
const express = require("express");
const path = require("path");
const app = express();

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, "public")));

// Default route (optional)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Use Render's provided port or 10000 locally
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
