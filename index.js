require('dotenv/config')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const db = require('./db/connection')
const swaggerUI = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json')

const PORT = process.env.PORT || 3000

app.listen(PORT, function () {
    console.log(`O app está ouvindo a porta ${PORT}`)
})

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

db.authenticate()
    .then(() => {
        console.log('Conectou-se ao banco de dados com sucesso')
    })
    .catch(() => {
        console.log('Ocorreu um erro ao conectar-se ao banco de dados')
    })

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.use(express.json())
app.use(express.static('public'))

app.use('/pet', require('./routes/Pet'))
app.use('/tutor', require('./routes/Tutor'))
