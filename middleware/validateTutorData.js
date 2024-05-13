const {
    validateNotNull,
    validateName,
    validateEmail,
    validatePhone,
    validateDate,
    validateZipCode,
} = require('../validations/validation')

const validateTutor = (req, res, next) => {
    const tutorData = req.body
    if (!validateNotNull(tutorData.name)) {
        return res.status(400).json({ error: 'Campo nome é obrigatório' })
    }
    if (!validateNotNull(tutorData.phone)) {
        return res
            .status(400)
            .json({ error: 'Campo número de telefone é obrigatório' })
    }
    if (!validateNotNull(tutorData.email)) {
        return res.status(400).json({ error: 'Campo email é obrigatório' })
    }
    if (!validateNotNull(tutorData.date_of_birth)) {
        return res
            .status(400)
            .json({ error: 'Campo data de nascimento é obrigatório' })
    }
    if (!validateNotNull(tutorData.zip_code)) {
        return res.status(400).json({ error: 'Campo CEP é obrigatório' })
    }
    if (!validateName(tutorData.name)) {
        throw new Error('Nome inválido, use apenas letras, espaços e acentos')
    }
    if (!validatePhone(tutorData.phone)) {
        throw new Error('Número de telefone inválido, use 11 números')
    }
    if (!validateEmail(tutorData.email)) {
        throw new Error('Email inválido, siga o formato aaa@aaa.aaa')
    }
    if (!validateDate(tutorData.date_of_birth)) {
        throw new Error('Data de nascimento inválida')
    }
    if (!validateZipCode(tutorData.zip_code)) {
        throw new Error('CEP inválido, utilize o formato 00000-000')
    }
    next()
}

module.exports = {
    validateTutor,
}
