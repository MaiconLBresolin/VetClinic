const express = require("express")
const router = express.Router()
/*const { getTutors } = require("../controllers/TutorController"*/

const Pet = require("../models/Pet")
const Tutor = require("../models/Tutor")

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

router.put("/edit/:idPet/tutor/:idTut", async (req, res) => {
  let idPet = req.params.idPet
  let idTut = req.params.idTut

  try {
    const pet = await Pet.findOne({ where: { id: idPet } })
    console.log(pet.idTutor)

    //se existe
    if (!pet) {
      console.log("Pet não encontrado")
      return res.status(404).json({
        error: "Pet não encontrado",
      })
    }

    // se pertence ao tutor informado
    if (parseInt(pet.idTutor) !== parseInt(idTut)) {
      console.log("Pet não pertence ao tutor informado")
      return res.status(404).json({
        error: "Pet não pertence ao tutor informado",
      })
    }

    pet.name = req.body.name
    pet.species = req.body.species
    pet.carry = req.body.carry
    pet.weight = req.body.weight
    pet.date_of_birth = req.body.date_of_birth

    await pet.save()

    console.log("dados atualizados")
    return res.status(200).json({ message: "Pet editado com sucesso" })
  } catch (err) {
    console.log("Error:", err)
    return res.status(500).json({ error: "Internal server error" })
  }
})

router.delete("/delete/:idPet/tutor/:idTut", async (req, res) => {
  let idPet = req.params.idPet
  let idTut = req.params.idTut

  try {
    const pet = await Pet.findOne({ where: { id: idPet } })
    console.log(pet.idTutor)

    //se existe
    if (!pet) {
      console.log("Pet não encontrado")
      return res.status(404).json({
        error: "Pet não encontrado",
      })
    }

    // se pertence ao tutor informado
    if (parseInt(pet.idTutor) !== parseInt(idTut)) {
      console.log("Pet não pertence ao tutor informado")
      return res.status(404).json({
        error: "Pet não pertence ao tutor informado",
      })
    }

    await Pet.destroy({
      where: {
        id: idPet,
      },
    })

    console.log("pet deletado")
    return res.status(200).json({ message: "Pet deletado com sucesso" })
  } catch (err) {
    console.log("Error:", err)
    return res.status(500).json({ error: "Internal server error" })
  }
})

module.exports = router
