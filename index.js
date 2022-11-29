const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const apiRoutes = require("./src/routes");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(apiRoutes);
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 3000;
const uri = process.env.URI;

app.get("/", (req, res) => {
  res.send("api works");
});

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
