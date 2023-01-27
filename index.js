//!Esto sirve para levantar un serividor
// var http = require('http');000

//? req/request => importacion
// http.createServer(function (req, res) {

//?Funcion para llamar a request/req y response/res
// res.writeHead(200, { 'Content-Type' : 'text/html' }); //? 200 es el status de la pagina

// res.end('Saludos Cordiales');
//?EScritura en el encabezado de la pagina 

// }).listen(3000); //? listen(3000) => es para el puerto del servidor (3000).

// console.log('servidor activo y corriendo');




const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Holi!')
})

app.post('/kinal', (req, res) => {
    res.send('Bienvenidos a Kinal')
})

app.put('/editar/1', (req, res) => {
    res.send('Editando usuario con el id 1')
})

app.delete('/eliminar/1', (req, res) => {
    res.send('eliminando usuario  1')
})



app.listen(port, () => {
    console.log(`Escuchando En el puerto ${port}`)
})


//!control c para reiniciar el servidor

//.jnpm install -g nodemonson es para guardar todos los datos principales

// para ejecutar en vivo los cambios se usa node --watch index y con recargar lla
// pagina se actualiza el servidor en el buscador


//* No se deben de subir las node_modules porque ocupan mucho espacio
//*Esto se hace con el gitignore

