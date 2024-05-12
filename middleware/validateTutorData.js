const {
  validateNotNull,
  validateName,
  validateEmail,
  validatePhone,
  validateDate,
  validateZipCode,
} = require("../validations/validation")

const validateTutor = (req, res, next) => {
  const tutorData = req.body
  if (!validateNotNull(tutorData.name)) {
    return res.status(400).json({ error: "Name field is required" })
  }
  if (!validateNotNull(tutorData.phone)) {
    return res.status(400).json({ error: "Phone field is required" })
  }
  if (!validateNotNull(tutorData.email)) {
    return res.status(400).json({ error: "Email field is required" })
  }
  if (!validateNotNull(tutorData.date_of_birth)) {
    return res.status(400).json({ error: "Date of birth field is required" })
  }
  if (!validateNotNull(tutorData.zip_code)) {
    return res.status(400).json({ error: "Zip Code field is required" })
  }
  if (!validateName(tutorData.name)) {
    throw new Error("Invalid name")
  }
  if (!validatePhone(tutorData.phone)) {
    throw new Error("Invalid phone number")
  }
  if (!validateEmail(tutorData.email)) {
    throw new Error("Invalid email, please follow the format aaa@aaa.aaa")
  }
  if (!validateDate(tutorData.date_of_birth)) {
    throw new Error("Invalid date of birth")
  }
  if (!validateZipCode(tutorData.zip_code)) {
    throw new Error("Invalid zip code, please follow the format 00000-000")
  }
  next()
}

module.exports = {
  validateTutor,
}
