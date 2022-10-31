const express = require("express");

const app = express();

app.get("", (req, res) => {
  res.send("Hola mundo");
});

app.get("/usuario", (req, res) => {});
app.get("/propiedades", (req, res) => {});
app.get("/productos", (req, res) => {});

app.listen(3000, () => {
  console.log("App is running...");
});
