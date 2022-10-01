// O que são parâmentros nas requisições?

// => trabalhando com o BODY PARAMS 
// ele pode ser recebido pelo post, put e patch

const express = require('express')
const app = express()
const port = 5500
app.use(express.json())

// BODY PARAMS
app.post('/params', (req, res) => {
    const {city, state, country} = req.body // desestruturando o json dentro do corpo da requisição para pegar o valor de mais de uma uma chave
    res.send(`${country} e ${state}`)
})

app.listen(port, () => {
    console.log("you walked through this door")
})
