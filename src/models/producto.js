const { Schema, model } = require("mongoose");

const schema = new Schema({
  nombre: {
    type: String,
  },
  precio: {
    type: Number,
  },
  precio_antes: {
    type: Number,
  },
  funcion: {
    type: String,
  },
  descripcion: {
    type: String,
  },
  ingredientes_clave: {
    type: String,
  },
  img_url: [
    {
      type: String,
    },
  ],
  tipo_producto: [
    {
      type: String,
    },
  ],
  tipo_piel: [
    {
      type: String,
    },
  ],
  soluciones: [
    {
      type: String,
    },
  ],
  momento_rutina: [
    {
      type: String,
    },
  ],
});

module.exports = model("producto", schema);
