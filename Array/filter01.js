const produtos = [
    {nome: 'Notebbok', preco: 2999, fragil: true},
    {nome: 'IPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plastico', preco: 18.99, fragil: false}
]
 
console.log(produtos.filter(function(p) {
    return false
}))

const isFragil = produto => produto.fragil
const isCaro = produto => produto.preco >= 500

console.log(produtos.filter(isCaro).filter(isFragil))