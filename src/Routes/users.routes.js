const { Router } = require('express')
const router = Router()
const { getUser, createUser, updateUser, deleteUser } = require('../Controllers/users.controllers')


//Read
router.get('/', getUser)

//Create
router.post('/', createUser)

//Update

router.put('/:id', updateUser)


//Delete

router.delete('/:id', deleteUser)

module.exports = router