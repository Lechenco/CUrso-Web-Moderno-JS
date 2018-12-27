// não aceita repeticção
// não indexado
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras')
times.add('Vasco') //Não aceita repetição

console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))

const nomes = ['Raquel', 'Lucas', 'Juliana', 'Lucas']
const namesSet = new Set(nomes)
console.log(namesSet)