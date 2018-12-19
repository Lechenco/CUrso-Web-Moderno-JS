Array.prototype.reduce2 = function(callback) {
    let ans = this[0]
    for( let i = 1; i < this.length; i++) {
        ans += callback(ans, this[i], i, this)
    }
    return ans
}

const alunos = [
    { nome: 'Joao', nota: 7.3, bolsista: true },
    { nome: 'Maria', nota: 9.3, bolsista: true }, 
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

// Desafio 1: Todos os alunos são bolsistas?

const todosBolsistas = alunos.map(a => a.bolsista).reduce2(
    (acumulador, a) => a && acumulador)

const algumBolsistas = alunos.map(a => a.bolsista).reduce2(
    (acumulador, a) => a || acumulador)

console.log(todosBolsistas, algumBolsistas)
