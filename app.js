const express = require("express");
const mongoose = require("mongoose");
const config = require("config");

const app = express();

app.use(express.json({ extended: true }));

const router = require("./routes/auth.router");

app.use("/auth", router);

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

const PORT = config.get("port") || 5000;
const mongoUri = config.get("mongodb");

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

mongoose.connect(mongoUri).then((value) => {
  console.log("Connection success");
});
