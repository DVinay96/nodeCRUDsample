const { Router } = require('express')
const router = Router()
const { getPelicula, createPelicula, updatePelicula, deletePelicula } = require('../Controllers/peliculas.controllers')


//Read
router.get('/', getPelicula)

//Create
router.post('/', createPelicula)

//Update

router.put('/:id', updatePelicula)


//Delete

router.delete('/:id', deletePelicula)

module.exports = router