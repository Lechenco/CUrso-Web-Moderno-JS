// coleção dinamica de pares chave /valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89999,
    proprietario: {
        nome: 'Raul',
        idade: 25,
        endereco: {

        }
    },
    condutores: [{
        nome: 'Gabriel',
        idade: 19
    }, {
        nome: 'Bruna',
        idade: 20
    }],
    calcularValorSeguro: function() {
        // ...
    }
}

carro.proprietario.nome = 'Joao'
console.log(carro)
delete carro.condutores
console.log(carro.condutores)