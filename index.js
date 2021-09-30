const express = require('express')
const Contenedor =require('./Contenedor.js');
const app = express()
const PORT = 3000
const archivo = new Contenedor('productos.txt')

app.get('/',(req,res)=>{
    res.send(`<a href=/productos> productos </a> <br/>
              <a href=/productoRandom> producto - Random </a>`)
})

app.get('/productos', async (req,res)=>{
    const array = await archivo.getAll();
    res.json(array)
})

app.get('/productoRandom',async (req,res)=>{
    const MaxId= await archivo.getMaxId() +1
    const Id = Math.floor(Math.random() * (MaxId-1) + 1)
    const producto = await archivo.getById( Id)
    res.json(producto)
})

const server = app.listen( process.env.PORT PORT , ()=>{ 
    console.log(`Servidor http escuchando el puerto ${server.address.PORT}`)
})

server.on("error",error => console.log(`Error del server ${error}`))