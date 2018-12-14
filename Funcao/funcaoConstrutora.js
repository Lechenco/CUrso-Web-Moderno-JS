function Carro(velocidadeMaxima = 200, dela = 5) {
    //atributo privado
    let velocidadeAtual = 0

    //metodo publico
    this.acelerar = function() {
        if(velocidadeAtual + dela <= velocidadeMaxima)
            velocidadeAtual += dela
        else
            velocidadeAtual = velocidadeMaxima
    }

    //metodo publico
    this.getVelocidadeAtual = function() {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

