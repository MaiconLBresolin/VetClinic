const {
  getAllTutors,
  //postTutorsServ,
  //putTutorsServ,
  //deleteTutorsServ,
} = require("../services/TutorService")

const getTutors = async (req, res) => {
  try {
    const tutorList = await getAllTutors()
    res.render(tutorList)
  } catch (err) {
    console.log(err)
  }
}

/*const postTutors = async (req,res)= > {

}
//putTutor
//deleteTutor
*/

module.exports = {
  getTutors,
}
