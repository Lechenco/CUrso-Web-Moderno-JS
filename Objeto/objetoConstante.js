// pessoa -> endereco
const pessoa = { nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// Mudar objeto de pessoa
//pessoa = { nome: 'Ana' }

Object.freeze(pessoa)
pessoa.nome = 'Maria'
delete pessoa.nome
console.log(pessoa.nome)