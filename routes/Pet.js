const express = require('express')
const router = express.Router()
const {
    searchPets,
    addPet,
    editPet,
    deletePet,
} = require('../controllers/PetController')
const { validatePet } = require('../middleware/validatePetData')

router.get('/', searchPets)

router.post('/:id', validatePet, addPet)

router.put('/:idPet/tutor/:idTut', validatePet, editPet)

router.delete('/:idPet/tutor/:idTut', deletePet)

module.exports = router
