const Pet = require('../models/Pet')

const getPetList = async () => {
    try {
        const petList = await Pet.findAll({ raw: true })
        return petList
    } catch (error) {
        console.error(error)
        throw error
    }
}

const postPet = async (tutorId, petData) => {
    try {
        await Pet.create({
            ...petData,
            idTutor: tutorId,
        })
    } catch (err) {
        console.error(err)
        throw err
    }
}

const updatePet = async (idPet, idTut, petData) => {
    try {
        const pet = await Pet.findOne({ where: { id: idPet } })

        if (!pet) {
            throw new Error('Pet não encontrado')
        }

        if (parseInt(pet.idTutor) !== parseInt(idTut)) {
            throw new Error('Pet não pertence ao tutor informado')
        }

        Object.assign(pet, petData)
        await pet.save()

        return 'Pet editado com sucesso'
    } catch (error) {
        console.error(error)
        throw error
    }
}

const erasePet = async (idPet, idTut) => {
    try {
        const pet = await Pet.findOne({ where: { id: idPet } })

        if (!pet) {
            throw new Error('Pet não encontrado')
        }

        if (parseInt(pet.idTutor) !== parseInt(idTut)) {
            throw new Error('Pet não pertence ao tutor informado')
        }

        await Pet.destroy({
            where: {
                id: idPet,
            },
        })

        return 'Pet deletado com sucesso'
    } catch (error) {
        console.error(error)
        throw error
    }
}

module.exports = {
    getPetList,
    postPet,
    updatePet,
    erasePet,
}
