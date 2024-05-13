const {
    validateNotNull,
    validateName,
    validateSpecies,
    validateDate,
} = require('../validations/validation')

const validatePet = (req, res, next) => {
    const petData = req.body
    if (!validateNotNull(petData.name)) {
        return res.status(400).json({ error: 'Campo nome é obrigatório' })
    }
    if (!validateNotNull(petData.species)) {
        return res.status(400).json({ error: 'Campo species é obrigatório' })
    }
    if (!validateNotNull(petData.carry)) {
        return res.status(400).json({ error: 'Campo carry é obrigatório' })
    }
    if (!validateNotNull(petData.weight)) {
        return res.status(400).json({ error: 'Campo peso é obrigatório' })
    }
    if (!validateNotNull(petData.date_of_birth)) {
        return res
            .status(400)
            .json({ error: 'Campo data de nascimento é obrigatório' })
    }
    if (!validateName(petData.name)) {
        throw new Error('Nome inválido, use apenas letras, espaços e acentos')
    }
    if (!validateSpecies(petData.species)) {
        throw new Error(
            'Espécie inválida, use apenas letras, espaços e acentos'
        )
    }
    if (!validateDate(petData.date_of_birth)) {
        throw new Error(
            'Data de nascimento inválida, siga o formato dd/mm/aaaa'
        )
    }
    next()
}

module.exports = {
    validatePet,
}
