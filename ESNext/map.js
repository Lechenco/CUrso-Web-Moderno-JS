const tecnologia = new Map()
tecnologia.set('react', { framework: false })
tecnologia.set('angular', { framework: true })

console.log(tecnologia.react)
console.log(tecnologia.get('react').framework)

const chavesVariadas = new Map([
    [function() {}, 'Funcao'],
    [{}, 'Objeto'],
    [123, 'Numero']
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))