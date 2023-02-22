const express = require('express')
const app = express()
require('dotenv').config()

//middlewares
app.use(express.json())

//Rutas
app.use('/api/users', require('./Routes/users.routes'))
app.use('/api/peliculas', require('./Routes/peliculas.routes'))


//Servidor
app.listen(process.env.PORT, () => {
    console.log(`servidor corriento en puerto: ${process.env.PORT}`);
})

