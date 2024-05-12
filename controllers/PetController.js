const {
  getPetList,
  postPet,
  updatePet,
  erasePet,
} = require("../services/PetService")

const searchPets = async (req, res) => {
  try {
    const petList = await getPetList()
    console.log(petList)
    res.json(petList)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Internal server error" })
  }
}

const addPet = async (req, res) => {
  const tutorId = req.params.id
  const { name, species, carry, weight, date_of_birth } = req.body

  try {
    await postPet(tutorId, {
      name,
      species,
      carry,
      weight,
      date_of_birth,
    })
    res.redirect("/")
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Internal server error" })
  }
}

const editPet = async (req, res) => {
  const idPet = req.params.idPet
  const idTut = req.params.idTut
  const petData = {
    name: req.body.name,
    species: req.body.species,
    carry: req.body.carry,
    weight: req.body.weight,
    date_of_birth: req.body.date_of_birth,
  }

  try {
    const message = await updatePet(idPet, idTut, petData)
    console.log(message)
    res.status(200).json({ message })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Internal server error" })
  }
}

const deletePet = async (req, res) => {
  const idPet = req.params.idPet
  const idTut = req.params.idTut

  try {
    const message = await erasePet(idPet, idTut)
    console.log(message)
    res.status(200).json({ message })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Internal server error" })
  }
}

module.exports = { searchPets, addPet, editPet, deletePet }
