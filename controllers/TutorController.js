const {
    getTutorList,
    postNewTutor,
    updateTutor,
    deleteTutorAndPets,
} = require('../services/TutorService')

const genericMessage = 'Operação efetuada com sucesso!!'

const searchTutors = async (req, res) => {
    try {
        const tutorList = await getTutorList()
        const resultadoFormatado = []
        for (const tutor of tutorList) {
            const tutorData = tutor.toJSON()
            if (tutor.pets && tutor.pets.length > 0) {
                for (const pet of tutor.pets) {
                    const petData = pet.toJSON()
                    resultadoFormatado.push({
                        ...tutorData,
                        pets: petData,
                    })
                }
            } else {
                resultadoFormatado.push(tutorData)
            }
        }
        console.log(resultadoFormatado)
        res.status(200).json(resultadoFormatado)
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Internal server error' })
    }
}

const addTutor = async (req, res) => {
    try {
        let { name, phone, email, date_of_birth, zip_code } = req.body
        await postNewTutor({ name, phone, email, date_of_birth, zip_code })
        res.status(200).json(genericMessage)
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Internal server error' })
    }
}

const editTutor = async (req, res) => {
    const id = req.params.id
    const tutorData = {
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        date_of_birth: req.body.date_of_birth,
        zip_code: req.body.zip_code,
    }

    try {
        await updateTutor(id, tutorData)
        res.status(200).json(genericMessage)
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Internal server error' })
    }
}

const deleteTutor = async (req, res) => {
    const id = req.params.id
    try {
        await deleteTutorAndPets(id)
        res.status(200).json(genericMessage)
    } catch (err) {
        console.error(err)
        res.status(500).send('Internal Server Error')
    }
}

module.exports = { searchTutors, addTutor, editTutor, deleteTutor }
