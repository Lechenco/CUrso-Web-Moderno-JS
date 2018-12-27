// usar rest como parâmetros de função

// usar spread com objeto
const funcionario = { nome: 'Maria', salario: 1234.9 }
const clone = { ativo: true, ...funcionario }
console.log(clone)

// usar spread com array
const grupoA = ['Joao', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)