const express = require('express')
const app = express()
const port = 3000

//middlewares
app.use(express.json())

//Rutas
app.use('/api/users', require('./Routes/users.routes'))


//Servidor
app.listen(port, () => {
    console.log(`servidor corriento en puerto: ${port}`);
})

