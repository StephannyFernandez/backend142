const mongoose = require('mongoose');


// el modelo que hacemos aca es el que vamos a montar en post

const citaSchema = mongoose.Schema({

    Paciente:{
        type: String,
        required:true
    },
    Documento:{
        type:Number,
        required:true
    }, 
    Prestador:{
        type:String,
        required:true
    },
    Especialidad:{
        type:String,
        required:true
    },
    Lugar:{
        type:String,
        required:true
    },
    Costo:{
        type:Number,
        required:true
    },
    FechayHora:{
        type:Date,
        required:true
    },



},{versionkey:false});

module.exports = mongoose.model('Cita', citaSchema);