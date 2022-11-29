const modelo = require("../models/producto");

const ProductosController = {
  list: (req, res) => {
    modelo
      .find({ status: 1 })
      .then((response) => {
        res.send(response);
      })
      .catch((err) => {
        console.log("Something went wrong", err);
        res.status(400).send();
      });
  },
  create: (req, res) => {
    const datos = req.body;
    modelo
      .create(datos)
      .then((response) => {
        console.log("Se creo correctamente");
        res.send(response);
      })
      .catch((err) => {
        res.status(400).send("No se pudo crear");
      });
  },
  getItem: async (req, res) => {
    const id = req.params.id;
    try {
      const producto = await modelo.findOne({ _id: id, status: 1 });
      if (producto) {
        res.send(producto);
      } else {
        res.status(404).send("no se encontro el producto");
      }
    } catch (err) {
      res.status(400).send("el id no es valido");
    }
  },
  update: (req, res) => {
    const id = req.params.id;
    const precio = req.body.precio;
    const precio_antes = req.body.precio_antes;
    modelo
      .findOne({ _id: id, status: 1 })
      .then((response) => {
        response.precio = precio;
        response.precio_antes = precio_antes;
        response.save();
        res.send(response);
      })
      .catch((err) => {
        res.status(400).send("no se pudo actualizar");
      });
  },
  deleteOne: (req, res) => {
    const id = req.params.id;
    modelo
      .findOne({ _id: id, status: 1 })
      .then((response) => {
        response.status = 0;
        response.save();
        res.send(response);
      })
      .catch((err) => {
        res.status(400).send("no se pudo eliminar");
      });
  },
};

module.exports = ProductosController;
