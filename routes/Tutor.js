const express = require("express")
const router = express.Router()

const {
  getTutors,
  //postTutors,
  //putTutor,
  //deleteTutor,
} = require("../controllers/TutorController")

router.get("/tutors", getTutors)
//router.post("/tutor", postTutors)
//router.put("/tutor/:id", putTutor)
//router.delete("/tutor/:id", deleteTutor)

module.exports = router
