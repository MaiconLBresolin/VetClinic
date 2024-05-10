const express = require("express")
const router = express.Router()
//const { getTutors } = require("../controllers/TutorController")

const Tutor = require("../models/Tutor")
const Pet = require("../models/Pet")

router.get("/search", async (req, res) => {
  try {
    const tutorList = await Tutor.findAll({
      include: Pet,
    })

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
  } catch (err) {
    console.error(err)
  }
})

module.exports = router
