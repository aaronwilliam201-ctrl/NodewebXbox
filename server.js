const express = require("express");
const path = require("path");
const app = express();

// Serve all static files from the 'public' folder
app.use(express.static(path.join(__dirname, "public")));

// Handle the root route (home page)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Port setup (Render uses process.env.PORT automatically)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
