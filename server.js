const express = require("express");
const path = require("path");
const app = express();

// Serve all static files from the 'public' folder
app.use(express.static(path.join(__dirname, "public")));

// Send index.html for the root route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
