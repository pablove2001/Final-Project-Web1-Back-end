const express = require("express");
const mongoose = require("mongoose");

const apiRoutes = require("./src/routes");

const app = express();

const port = 3000;

//const uri ="mongodb+srv://iteso2022:ITESO1234@cluster0.jqhyj.mongodb.net/agenda?retryWrites=true&w=majority";
const uri =
  "mongodb+srv://api:xog94ZkMFziCdw57@cluster0.b8dmnja.mongodb.net/back-end?retryWrites=true&w=majority";

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
