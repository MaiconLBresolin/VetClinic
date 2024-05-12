const express = require("express")
const exphbs = require("express-handlebars")
const app = express()
const bodyParser = require("body-parser")
const db = require("./db/connection")

const PORT = 3000

app.listen(PORT, function () {
  console.log(`O app está ouvindo a porta ${PORT}`)
})

db.authenticate()
  .then(() => {
    console.log("Conectou-se ao banco de dados com sucesso")
  })
  .catch((err) => {
    console.log("Ocorreu um erro ao conectar-se ao banco de dados")
  })

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use(express.json())
app.use(express.static("public"))

app.use("/pet", require("./routes/Pet"))
app.use("/tutor", require("./routes/Tutor"))
