const express = require('express')
const router = express.Router()
const {
    searchTutors,
    addTutor,
    editTutor,
    deleteTutor,
} = require('../controllers/TutorController')
const { validateTutor } = require('../middleware/validateTutorData')

router.get('/', searchTutors)

router.post('/', validateTutor, addTutor)

router.put('/:id', validateTutor, editTutor)

router.delete('/:id', deleteTutor)
module.exports = router
