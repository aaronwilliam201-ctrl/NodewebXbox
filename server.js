const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

const validCodes = ["XBOX1234", "GIFT2025", "CODE9999"]; // sample gift cards

app.post("/api/redeem", (req, res) => {
  const { code } = req.body;
  if (validCodes.includes(code)) {
    res.json({ success: true, message: "Gift card successfully loaded!" });
  } else {
    res.json({ success: false, message: "Invalid or expired code." });
  }
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/giftcard", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "giftcard.html"));
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
