const express = require('express')
const app = express()
const port = 3000
app.use(express.json())

app.get('/', (req, res) => {
    res.send("Hello backend")
})

// posso criar outra rota
app.get('/about', (req, res) => {
    res.send("My name is Paulo")
})

// post   
app.post('/post', (req, res) => res.send(req.body.job)) 
// port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// PUT -> editar informações
let author = 'Paulo' // a variável "author" começa com um valor e depois é alterada no corpo da aplicação
app.put('/put', (req, res) => {
    author = req.body.author
    res.send(author)
})

// DELETE 
app.delete('/delete/:id', (req, res) => {
    res.send(req.params.id)
}) 

//  LISTEN 
// -> ele fica ouvindo a porta 3000 a partir do momento que rodamos o comando 'node index.js' 

// POST
// -> tudo o que é enviado no método post, sempre será recebido no request(req) do corpo(body) da função
// -> também no método post, é necessário passar o tipo de dado (JSON) que serão publicados (usando o use(express.json()))

//DELETE
// O delete recebe algum id/identificador para deletar determinado objeto pelo (params), e não no req.body