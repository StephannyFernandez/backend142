const mongoose = require('mongoose');


// el modelo que hacemos aca es el que vamos a montar en post

const productoSchema = mongoose.Schema({

    Nombredelproducto:{
        type: String,
        required:true
    },
    Descripciondelproducto:{
        type:String,
        required:true
    },
    Codigodebarras:{
        type:Number,
        required:true
    },
    Unidades:{
        type:Number,
        required:true
    },
    Precioventa:{
        type:Number,
        required:true
    },
    Ubicacion:{
        type:String,
        required:true
    },
    Categoria:{
        type:String,
        required:true
    },
    Marca:{
        type:String,
        required:true
    },



},{versionkey:false});

module.exports = mongoose.model('Producto', productoSchema);

