app.get('/', (req, res) => {

    let saludo = `Hola, ${req.query.nombre} ${req.query.apellido}`
    let edad = req.query.edad

    if (edad > 18) {

        res.json({
            saludo: saludo,
            mayorDeEdad: true,
            mensaje: `${req.query.nombre}, eres mayor de edad. Puedes participar.`

        })
    } else {
        res.json({
            saludo: saludo,
            mayorDeEdad: false,
            mensaje: `${req.query.nombre}, eres menor de edad. No puedes participar.`
        })
    }
})