const alunos = [
    { nome: 'Joao', nota: 7.3, bolsista: true },
    { nome: 'Maria', nota: 9.3, bolsista: true }, 
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

// Desafio 1: Todos os alunos são bolsistas?

const todosBolsistas = alunos.map(a => a.bolsista).reduce(
    (acumulador, a) => a && acumulador)

const algumBolsistas = alunos.map(a => a.bolsista).reduce(
    (acumulador, a) => a || acumulador)

console.log(todosBolsistas, algumBolsistas)
