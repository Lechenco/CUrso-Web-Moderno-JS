Array.prototype.filter2 = function(callback) {
    const newArray = []

    for(let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this))
            newArray.push(this[i])
    }

    return newArray
}

const produtos = [
    {nome: 'Notebbok', preco: 2999, fragil: true},
    {nome: 'IPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plastico', preco: 18.99, fragil: false}
]
 
const isFragil = produto => produto.fragil
const isCaro = produto => produto.preco >= 500

console.log(produtos.filter2(isCaro).filter2(isFragil))