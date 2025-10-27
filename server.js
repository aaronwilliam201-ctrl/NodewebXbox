const express = require("express");
const path = require("path");

const app = express();

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// For any route not handled by static files, serve index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Render provides the PORT environment variable
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
