const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const apiRoutes = require("./src/routes");

const app = express();

const port = process.env.PORT || 3000;

app.use(cors());

const uri = process.env.URI;

app.get("/", (req, res) => {
  res.send("api works");
});

app.use(express.json());
app.use(apiRoutes);

mongoose.connect(uri, (err) => {
  if (!err) {
    console.log("[+] Successful connection with MongoDB");
    app.listen(port, () => {
      console.log("[+] App is running in port: " + port);
    });
  } else {
    console.log("[!] Error connecting to mongodb", err);
  }
});
