const express = require('express')
const Contenedor =require('./Contenedor.js');
const app = express()
const PORT = 3000

async function recuperarAll()
{
    const archivo = new Contenedor('productos.txt')
    array = await archivo.getAll();
    return array;
}

app.get('/',(req,res)=>{
    res.send(`<a href=/productos> productos </a> 
            <a href=/productoRandom> producto - Random </a>`)
})


app.get('/productos', async (req,res)=>{

    const archivo = new Contenedor('productos.txt')
    array = await archivo.getAll();
    console.log(array)
    res.json(array)
})

app.get('/productoRandom',async (req,res)=>{
    const archivo = new Contenedor('productos.txt')
    const MaxId= await archivo.getMaxId() +1
    const Id = Math.floor(Math.random() * (MaxId-1) + 1)
    const producto = await archivo.getById( Id)
    res.json(producto)
})





const server = app.listen( PORT , ()=>{ 
    console.log(`Servidor http escuchando el puerto ${server.address.PORT}`)
})

server.on("error",error => console.log(`Error del server ${error}`))