const express = require('express')
const router = express.Router()
const {
    searchTutors,
    addTutor,
    editTutor,
    deleteTutor,
} = require('../controllers/TutorController')
const { validateTutor } = require('../middleware/validateTutorData')

router.get('/search', searchTutors)

router.post('/add', validateTutor, addTutor)

router.put('/edit/:id', validateTutor, editTutor)

router.delete('/delete/:id', deleteTutor)

module.exports = router
