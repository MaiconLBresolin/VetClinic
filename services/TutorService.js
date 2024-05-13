const Tutor = require('../models/Tutor')
const Pet = require('../models/Pet')
const Sequelize = require('../db/connection')

const getTutorList = async () => {
    try {
        const tutorList = await Tutor.findAll({
            include: Pet,
        })
        return tutorList
    } catch (err) {
        console.error(err)
        throw err
    }
}

const postNewTutor = async (tutorData) => {
    try {
        await Tutor.create(tutorData)
    } catch (err) {
        console.error(err)
        throw err
    }
}

const updateTutor = async (id, tutorData) => {
    try {
        const tutor = await Tutor.findOne({ where: { id } })
        if (!tutor) {
            throw new Error('Não existe tutor registrado com esse id')
        }
        Object.assign(tutor, tutorData)
        await tutor.save()
        console.log('dados atualizados')
    } catch (err) {
        console.error(err)
        throw err
    }
}

const deleteTutorAndPets = async (id) => {
    try {
        const tutor = await Tutor.findOne({ where: { id } })
        if (!tutor) {
            throw new Error('Tutor not found')
        }
        await Sequelize.transaction(async (t) => {
            await Pet.destroy({ where: { idTutor: id }, transaction: t })
            await Tutor.destroy({ where: { id: id }, transaction: t })
        })
    } catch (err) {
        console.error(err)
        throw err
    }
}

module.exports = {
    getTutorList,
    postNewTutor,
    updateTutor,
    deleteTutorAndPets,
}
