const { peliculas } = require('../Database/db')
const { v4: uuid } = require('uuid')

const getPelicula = (req, res) => {
    return res.json({
        ok: true,
        msg: 'Películas obtenidas',
        data: peliculas,
    })
}

const createPelicula = (req, res) => {
    const { title, year, price } = req.body
    const pelicula = {
        id: uuid(),
        title,
        year,
        price
    }

    peliculas.push(pelicula)

    return res.json({
        ok: true,
        msg: 'Película Agregada',
        data: pelicula,
    })
}

const updatePelicula = (req, res) => {
    const { id } = req.params
    const { title, year, price } = req.body
    const pelicula = peliculas.find((pelicula) => pelicula.id === id)
    pelicula.title = title
    pelicula.year = year
    pelicula.price = price

    peliculas.push(pelicula)

    return res.json({
        ok: true,
        msg: 'Película Actualizada',
        data: pelicula,
    })
}

const deletePelicula = (req, res) => {
    const { id } = req.params

    const pelicula = peliculas.find((pelicula) => pelicula.id === id)

    peliculas.splice(peliculas.indexOf(pelicula), 1)

    return res.json({
        ok: true,
        msg: 'Película Elimidada',
        data: pelicula,
    })
}

module.exports = { getPelicula, createPelicula, updatePelicula, deletePelicula }