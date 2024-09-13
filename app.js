const { error } = require('console');
const mongoose = require('mongoose');
const urldb = "mongodb://localhost:27017";

mongoose.connect(urldb)
.then(()=>{
    console.log("funciona la conexión a la base de datos");
})
.catch((error)=>{
    console.log("no funciona la conexión a la base de datos",error);
})

const EsquemaAlumnos = new mongoose.Schema({
    name:{
        type:String
    },
    apepat:{
        type:String
    },
    apemat:{
        type:String
    },
    edad:{
        type:Number
    }
})

const modeloAlumnos = new mongoose.model("Tabla de Alumnos", EsquemaAlumnos);

modeloAlumnos.create({
    name:"Andrés",
    apepat:"Dorado",
    edd:31
})