const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45}',
    '{ "nome": "Caderno", "preco": 13.90}',
    '{ "nome": "Kit de Lapis", "preco": 41.22}',
    '{ "nome": "Caneta", "preco": 7.50}'
]

// Retornar um array apenas com os precos

const toObject = json => JSON.parse(json)
const getPreco = produto => produto.preco

let precos = carrinho.map(toObject).map(getPreco)
console.log(precos)