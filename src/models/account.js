const { Schema, model } = require("mongoose");

const schema = new Schema({
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  direccion: {
    type: String,
    default: "",
  },
  carrito: [
    {
      id_producto: {
        type: String,
      },
      cantidad: {
        type: Number,
      },
    },
  ],
  status: {
    type: Number,
    default: 1,
  },
});

module.exports = model("account", schema);
