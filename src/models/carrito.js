const { Schema, model } = require("mongoose");
const carrschema = new Schema({
  id_producto:{
    type:String,
  },
  nombre: {
    type: String,
  },
  precio: {
    type: Number,
  },
  img:{
    type:String
  },
  cantidad: {
    type: Number,
  },
  status:{
    type: Number,
    default: 1
  },
  total:{
    type:Number,
  },
  id_usuario:{
    type:String,
  }
}); 
module.exports = model("carritos", carrschema);