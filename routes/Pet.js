const express = require("express")
const router = express.Router()
/*const { getTutors } = require("../controllers/TutorController"*/

const Pet = require("../models/Pet")

router.get("/search", async (req, res) => {
  let petList = await Pet.findAll({ raw: true })
  console.log(petList)
})

router.post("/add/:id", async (req, res) => {
  const tutorId = req.params.id
  const { name, species, carry, weight, date_of_birth } = req.body

  try {
    await Pet.create({
      name,
      species,
      carry,
      weight,
      date_of_birth,
      idTutor: tutorId,
    })
    res.redirect("/")
  } catch (err) {
    console.log(err)
  }
})

module.exports = router
