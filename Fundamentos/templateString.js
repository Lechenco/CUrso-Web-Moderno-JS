const nome = 'Rubia'
const concatencao = 'Ola ' + nome + '!'
const template = `
    Ola
    ${nome}!`

console.log(concatencao, template)
console.log(`1 + 1 = ${1 + 1}`)

const up = s => s.toUpperCase()
console.log(`Ei...${up('cuidado')}!`)