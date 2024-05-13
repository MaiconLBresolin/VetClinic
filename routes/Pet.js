const express = require('express')
const router = express.Router()
const {
    searchPets,
    addPet,
    editPet,
    deletePet,
} = require('../controllers/PetController')
const { validatePet } = require('../middleware/validatePetData')

router.get('/search', searchPets)

router.post('/add/:id', validatePet, addPet)

router.put('/edit/:idPet/tutor/:idTut', validatePet, editPet)

router.delete('/delete/:idPet/tutor/:idTut', deletePet)

module.exports = router
