const { Tutor } = require("../models/Tutor")

const getAllTutors = async () => {
  try {
    const tutors = await Tutor.findAll()
    return tutors
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  getAllTutors,
}
