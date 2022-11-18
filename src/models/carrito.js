const {Schema, model} = require("mongoose");

const schema = new Schema({
    id_usuario:{
      type: String,
    },
    productos:[{
      id_producto:{
        type: String,
      },
      img:{
        type: String,
      },
      precio:{
        type:Number
      },
      cantidad:{
        type:Number
      }
    }],
    total:{
        type: Number,
    },
});

module.exports = model("carrito",schema);