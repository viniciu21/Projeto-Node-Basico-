const sequence = {
    _id: 1,
    id() {return this._id++}

}

const produtos = {}

function SalvarProduto(produto){//recebe um objeto com ou sem .id e com ele se instancia ponto do array 
    if(!produto.id) produto.id = sequence.id()
    produtos[produto.id] = produto
    return produto 
}
const a = SalvarProduto({
    nome: 'Vinicius',
    preço: 'undefined'
})
console.log(produtos)
console.log(a)
console.log(sequence._id)
console.log(produtos[1].nome)