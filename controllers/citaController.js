const cita = require('../models/cita');
const Cita =require('../models/cita');

//funcion agregar citas


exports.agregarCitas =async(req, res)  =>{
    try{
    
    
    
        let citas;
        citas =new Cita(req.body)
    await citas.save();
    res.json(citas);
    
    }catch (error){
        console.log(error)
    res.status(500).send('hubo un error al agregar la cita');
    }}
    



//funcion buscar clientes

exports.mostrarCitas = async (req, res) =>{
    try{

        const citas = await Cita.find();
        res.json(citas);

    } catch (error){
        console.log(error)
        res.status(500).send('hubo un error al mostrar las citas');


    }
}


//buscar citas
exports.BuscarCita = async (req, res) =>{
    try {
let citas = await Cita.findById(req.params.id);
if (citas){
    res.status(404).send({msg:"la cita no se encuentra por iD"});
}else{
res.json(citas);
}

} catch (error) {
    console.log(error)
    res.status(500).send('hubo un error al buscar la cita');
   
}
}

//funcion modificar citas con el metodo put

exports.modificarCitas = async (req, res)=>{
try{

    const citas = await Cita.findOneAndUpdate({_id: req.params.id}, req.body, {new:true}); 
    if(!citas)
        res.status(404).send("cita no encontrada");
    else
    res.json(citas);


    } catch (error) {
    console.log(error)
    res.status(500).send('hubo un error al editar la cita');

}
}


//funcion editar utilizando patch

exports.editarCitas = async(req,res)=>{
    try{
    const citas = await Cita.findByIdAndUpdate(req.params.id, req.body,{new:true});
    if(!citas){
        return res.status(404).send("la cita no existe");
    }
    res.json(citas);

    }catch (error){
        console.log(error)
        res.status(500).send('hubo un error al editar la cita');
    }
}

//funcion eliminar usando delete

exports.eliminarCitas = async(req, res) =>{
    try{
        let citas = await Cita.findById({_id: req.params.id});
        if(!citas){
            res.status(404).send("la cita no existe");
            return
        }
        await Cita.findOneAndDelete({_id: req.params.id})
        res.json({msg: "la cita fue eliminada con exito"});
        return

        }catch (error){
            console.log(error)
            res.status(500).send('hubo un error al eliminar la cita');
        }
    }