// usando a notação literal
const obj1 = {}
console.log(obj1)

// Oject JS
console.log(typeof Object, typeof new Object)

// Função construtora
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
} 

const p1 = new Produto('Canet', 7.32, 0.15)

// Função factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome, 
        salarioBase, 
        faltas, 
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// JSON retorna um objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}') 
console.log(fromJSON.info)