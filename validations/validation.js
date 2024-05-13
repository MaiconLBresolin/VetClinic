const notNullRegex = /\S/
const nameRegex = /^[a-zA-ZÀ-ÿ\s]+$/
const phoneRegex = /^\d{11}$/
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const zipCodeRegex = /^\d{5}-\d{3}$/
const dateRegex =
    /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/(19\d{2}|20(?:0\d|1[0-9]|2[0-4]))$/ // dd/mm/yyyy de 1900 até 2024
const speciesRegex = /^[a-zA-Z\s]+$/

module.exports = {
    validateNotNull: (input) => notNullRegex.test(input),
    validateName: (name) => nameRegex.test(name),
    validatePhone: (phone) => phoneRegex.test(phone),
    validateEmail: (email) => emailRegex.test(email),
    validateZipCode: (zipCode) => zipCodeRegex.test(zipCode),
    validateDate: (date) => dateRegex.test(date),
    validateSpecies: (species) => speciesRegex.test(species),
}
