const express = require("express")
const exphbs = require("express-handlebars")
const app = express()
const bodyParser = require("body-parser")
const db = require("./db/connection")

const PORT = 3000

app.listen(PORT, function () {
  console.log(`O express está rodando na porta ${PORT}`)
})

//db connection
db.authenticate()
  .then(() => {
    console.log("Conectou ao banco com sucesso")
  })
  .catch((err) => {
    console.log("Ocorreu um erro ao se conectar", err)
  })

//rotas
app.get("/", (req, res) => {
  res.send("Está Funcionando!")
})
