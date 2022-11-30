const modelo = require("../models/account");

const CarritoController = {
  getItems: async (req, res) => {
    try {
      const _id = req.body._id;
      const user = await modelo.findOne({
        _id: _id,
        status: 1,
      });
      if (user) {
        res.send(user.carrito);
      } else {
        res.status(404).send("Error buscando usuario");
      }
    } catch (err) {
      res.status(400).send("Los datos no son validos");
    }
  },
  addItem: async (req, res) => {
    try {
      const _id = req.body._id;
      const id_producto = req.headers.id_producto;
      const cantidad = req.body.cantidad;
      modelo
        .findOne({ _id: _id, status: 1 })
        .then((response) => {
          let added = false;
          response.carrito.map((item) => {
            if (item.id_producto == id_producto) {
              item.cantidad = cantidad;
              added = true;
            }
            return item;
          });
          if (!added) {
            response.carrito.push({
              id_producto: id_producto,
              cantidad: cantidad,
            });
          }
          response.save();
          res.send(response.carrito);
        })
        .catch((err) => {
          res.status(400).send("no se pudo añadir el producto");
          console.log('error',err);
        });
    } catch (err) {
      res.status(400).send("Los datos no son validos");
    }
  },
  deleteOneItem: (req, res) => {
    try {
      const _id = req.body._id;
      const id_producto = req.body.id_producto;
      modelo
        .findOne({ _id: _id, status: 1 })
        .then((response) => {
          for (let i = 0; i < response.carrito.length; i++) {
            if (response.carrito[i].id_producto == id_producto) {
              response.carrito.splice(i, 1);
              break;
            }
          }
          response.save();
          res.send(response.carrito);
        })
        .catch((err) => {
          res.status(400).send("no se pudo eliminar ese producto");
        });
    } catch (err) {

      res.status(400).send("Los datos no son validos");
    }
  },
  deleteAll: (req, res) => {
    try {
      const _id = req.body._id;
      modelo
        .findOne({ _id: _id, status: 1 })
        .then((response) => {
          response.carrito = [];
          response.save();
          res.send(response.carrito);
        })
        .catch((err) => {
          res.status(400).send("no se pudo eliminar el carrito");
        });
    } catch (err) {
      res.status(400).send("Los datos no son validos");
    }
  },
};
module.exports = CarritoController;
