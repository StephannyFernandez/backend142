const producto = require('../models/producto');
const Producto =require('../models/producto');

//funcion agregar productos


exports.agregarProductos =async(req, res)  =>{
try{



    let productos;
    productos =new Producto(req.body)
await productos.save();
res.json(productos);

}catch (error){
    console.log(error)
res.status(500).send('hubo un error el producto');
}}



//funcion buscar productos

exports.mostrarProductos = async (req, res) =>{
    try{

        const productos = await Producto.find();
        res.json(productos);

    } catch (error){
        console.log(error)
        res.status(500).send('hubo un error al mostrar los productos');


    }
}


//buscar productos
exports.BuscarProducto = async (req, res) =>{
    try {
let productos = await Producto.findById(req.params.id);
if (!productos){
    res.status(404).send({msg:"el producto no se encuentra por sku"});
}else{
res.json(productos);
}

} catch (error) {
    console.log(error)
    res.status(500).send('hubo un error al buscar un producto');
   
}
}

//funcion modificar productos con el metodo put

exports.modificarProductos = async (req, res)=>{
try{

    const productos = await Producto.findOneAndUpdate({_id: req.params.id}, req.body, {new:true}); 
    if(!productos)
        res.status(404).send("producto no encontrado");
    else
    res.json(productos);


    } catch (error) {
    console.log(error)
    res.status(500).send('hubo un error al editar el producto');

}
}


//funcion editar utilizando patch

exports.editarProductos = async(req,res)=>{
    try{
    const productos = await Producto.findByIdAndUpdate(req.params.id, req.body,{new:true});
    if(!productos){
        return res.status(404).send("el producto no existe");
    }
    res.json(productos);

    }catch (error){
        console.log(error)
        res.status(500).send('hubo un error al editar el producto');
    }
}

//funcion eliminar usando delete

exports.eliminarProductos = async(req, res) =>{
    try{
        let productos = await Producto.findById({_id: req.params.id});
        if(!productos){
            res.status(404).send("el producto no existe");
            return
        }
        await Producto.findOneAndDelete({_id: req.params.id})
        res.json({msg: "el producto fue eliminado con exito"});
        return

        }catch (error){
            console.log(error)
            res.status(500).send('hubo un error al eliminar el producto');
        }
    }