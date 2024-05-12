const express = require("express")
const router = express.Router()
const {
  searchTutors,
  addTutor,
  editTutor,
  deleteTutor,
} = require("../controllers/TutorController")
const { validateTutor } = require("../middleware/validateTutorData")

router.get("/search", searchTutors)

router.post("/add", validateTutor, addTutor)

router.put("/edit/:id", validateTutor, editTutor)

router.delete("/delete/:id", deleteTutor)

/*
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
*/

/*
router.post("/add", (req, res) => {
  let { name, phone, email, date_of_birth, zip_code } = req.body

  Tutor.create({
    name,
    phone,
    email,
    date_of_birth,
    zip_code,
  })
    .then(() => res.redirect("/"))
    .catch((err) => console.log(err))
})
*/

/*
router.put("/edit/:id", async (req, res) => {
  const id = req.params.id

  try {
    const data = await Tutor.findOne({ where: { id: id } })
    if (!data) {
      console.log("Não existe tutor registrado com esse id")
    } else {
      data.name = req.body.name
      data.phone = req.body.phone
      data.email = req.body.email
      data.date_of_birth = req.body.date_of_birth
      data.zip_code = req.body.zip_code
    }
    await data.save()
    console.log("dados atualizados")
  } catch (err) {
    console.log(err)
  }
})
*/

/*
router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id
  try {
    await Sequelize.transaction(async (t) => {
      await Pet.destroy({ where: { idTutor: id }, transaction: t })
      await Tutor.destroy({ where: { id: id }, transaction: t })
    })
    res.redirect("/")
  } catch (err) {
    console.log(err)
    res.status(500).send("Internal Server Error")
  }
})
*/

module.exports = router
