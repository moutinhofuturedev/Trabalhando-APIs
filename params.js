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
    res.send(`Meu país é o ${country} e moro no estado de ${state}`)
})

// ROUTES PARAMS 
app.get('/:name', (req, res) => {
    res.send(req.params.name)
})  

app.get('/name/:state', (req, res) => {
    res.send(req.params.state)
})

// QUERY PARAMS
app.get('/', (req, res) => {
    res.send(req.query)
})

app.get('/about/id', (req, res) => {
    res.send(req.query)
})

app.listen(port, () => {
    console.log("you walked through this door")
})
