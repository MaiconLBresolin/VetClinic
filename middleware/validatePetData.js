const {
  validateNotNull,
  validateName,
  validateSpecies,
  validateDate,
} = require("../validations/validation")

const validatePet = (req, res, next) => {
  const petData = req.body
  if (!validateNotNull(petData.name)) {
    return res.status(400).json({ error: "Name field is required" })
  }
  if (!validateNotNull(petData.species)) {
    return res.status(400).json({ error: "Species field is required" })
  }
  if (!validateNotNull(petData.carry)) {
    return res.status(400).json({ error: "Carry field is required" })
  }
  if (!validateNotNull(petData.weight)) {
    return res.status(400).json({ error: "Weight field is required" })
  }
  if (!validateNotNull(petData.date_of_birth)) {
    return res.status(400).json({ error: "Date of birth field is required" })
  }
  if (!validateName(petData.name)) {
    throw new Error("Invalid name")
  }
  if (!validateSpecies(petData.species)) {
    throw new Error("Invalid species")
  }
  if (!validateDate(petData.date_of_birth)) {
    throw new Error("Invalid date of birth")
  }
  next()
}

module.exports = {
  validatePet,
}
