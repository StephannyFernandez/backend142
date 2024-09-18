const express = require('express');
const conectarBD =require('../configdb/db');
const cors = require('cors');



const app = express();
const puerto = process.env.PORT || 5000;


//llamamos a nuestra funcion conectarBD
conectarBD();
app.use(cors());
app.use(express.json());

//rutas del proyecto

app.use('/api/Productos',require('../routes/productosRutas'));





//ruta desde la web
app.get('/',(req, res) =>{
res.send("bienvenidos estamos desde el navegador");
})


app.listen(puerto,() => console.log("estamos conectados desde el servidor", puerto));