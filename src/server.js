const porta = 3003

const express = require('express')
const app = express()
const database = require('./database')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended : true}))

app.get('/produtos', (request, response, next) => {
    response.send(database.getProdutos()) //converts to JSON automatically
} )

app.get('/produtos/:id', (request, response, next) => {    
    response.send(database.getProduto(request.params.id))
} )

app.post('/produtos', (request,response,next) =>{
    const produto = database.SalvarProduto({
        name: request.body.name,
        price: request.body.price
    })
    response.send(produto)//gerenate JSON
})
app.put('/produtos/:id', (request,response,next) =>{
    const produto = database.SalvarProduto({
        id: request.params.id,
        name: request.body.name,
        price: request.body.price
    })
    response.send(produto)//gerenate JSON
})
app.delete('/produtos/:id', (request,response,next) =>{
    const produto = database.excluirProduto(request.params.id)
    response.send(produto)//gerenate JSON
})


app.listen(porta, () =>{
    console.log(`O servidor esta sendo usado na porta ${porta}.`)
})