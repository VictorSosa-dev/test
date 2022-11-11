require('dotenv').config()

const express = require('express')
const app = express()
var path = require('path')

const port = 3000
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.get('/', (request, response) => {
  response.send('<h1>Mi API</h1>')
})

app.use('/api', require('./router/index'))
app.listen(port, () => {
    //console.log(`Servidor escuchando en http://localhost:${port}`)
    console.log(`Corriendo en el puerto ` {process.env.PORT})
})