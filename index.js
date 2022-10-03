const express = require('express')
const axios = require('axios') // usando Axios para buscar informações com promise na api

const app = express()
const port = 3000
app.use(express.json())

// Vamos consumir a api do Github dentro do back-end do nosso projeto(localhost:3000) Node com Axios.
// O Express não faz requisição em api, ele é usado apenas para criar as rotas da api, mas não serve para buscar os dados, por isso usaremos o Axios
app.get('/', (req, res) => {
    axios.get('https://api.github.com/users/moutinhofuturedev')
    .then(result => res.send(`<img src="${result.data.avatar_url}">`))
    .catch(error => console.error(error))
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