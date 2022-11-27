const Cart = require("../models/carrito");

const CarritoController = {
  list: (req, res) => {
    Cart.find({}).then((response) => {
      res.send(response);
    }).catch((err) => {
      console.log("Something went wrong", err);
      res.status(400).send();
    });
  },
  update: async (req, res) => {
    const {id_producto} = req.params;
    //const id = req.params.id;
    const cantidad = req.body.cantidad;
    const productoBus = await Cart.findById(id_producto);
    Cart.findOne({ id_producto:productoBus }).then(respuesta => {
      respuesta.cantidad = cantidad;
      respuesta.save(); //guardarlo en la base de datos por medio del modelo 
      res.send(respuesta);
    }).catch(err => {
      res.status(404).send('no se pudo actualizar');
    });
  },
  create: (req, res) => {
    const datos = req.body;
    Cart.create(datos).then((response) => {
      console.log("Se agrego al carrito");
      res.send(response);
    }).catch((err) => {
      res.status(400).send("No se pudo agregar al carrito");
    });
  },
  delete: (req, res) => {
    const id = req.params.id;
    const status=2;
    //buscamos el produtco en el carrito
    Cart.findOne({ _id: id }).then((response) => {
      response.status= status;  
      response.save();
      res.send();
    }).catch(err => {
      res.status(400).send("No fue posible eliminar");
    });
  }
}
module.exports = CarritoController;
