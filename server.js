require('dotenv').config()

const express = require('express')
const app = express()
var path = require('path')

const PORT = process.env.PORT
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.get('/', (request, response) => {
  response.send('<h1>Mi API</h1>')
})

app.use('/api', require('./router/index'))
app.listen(PORT, () => {
    //console.log(`Servidor escuchando en http://localhost:${port}`)
    console.log(`Corriendo en el puerto ${PORT}`)
})