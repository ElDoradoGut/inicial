import { modeloAlumnos } from "../models/alumno.model.js";

modeloAlumnos.create({
    name:"Andrés",
    apepat:"Dorado",
    edd:31
})

export const test=()=>{
    console.log("Se esta mandando llamar correctamente el controlador.")
}