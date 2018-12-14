const pessoa = {
    saudacao: 'Bom dia',
    fala() {
        console.log(this.saudacao)
    }
}

pessoa.fala()
const fala = pessoa.fala
fala() // conflito entre paradgimas: funcional e OO

const falarDePessoa = pessoa.fala.bind(pessoa)
falarDePessoa()