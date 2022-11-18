const modelo = require("../models/carrito");

const CarritoController={
    create: (req, res) =>{},
    update: (req, res) =>{},
    list: (req, res) => {
        modelo
          .find({})
          .then((response) => {
            res.send(response);
          })
          .catch((err) => {
            console.log("Something went wrong", err);
            res.status(400).send();
          });
      },
      get: (req, res) => {},
      delete: (req, res) => {},
}
module.exports = CarritoController;