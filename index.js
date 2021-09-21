const express = require('express')
//const Contenedor = require('Contenedor')
const app = express()
const PORT = 3000


app.get('/',(req,res)=>{
    res.send(`<a href=/productos> productos </a> 
            <a href=/productoRandom> producto - Random </a>`)
})


app.get('/productos',(req,res)=>{

    res.send('hola mundo')
})

app.get('/productoRandom',(req,res)=>{
    res.send('productoRandom')
})





const server = app.listen( PORT , ()=>{ 
    console.log(`Servidor http escuchando el puerto ${server.address.PORT}`)
})

server.on("error",error => console.log(`Error del server ${error}`))