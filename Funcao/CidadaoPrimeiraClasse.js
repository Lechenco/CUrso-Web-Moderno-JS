// forma literal
function fun1() { }

//Armazenar em uma variavel
const fun2 = function() { }

// Armazenar em uma array
const array = [function(a, b){ return a + b}, fun1, fun2]
console.log(array[0](2, 3))

// Objeto
const obj = {}
obj.falar = function() { return 'Oi'}

//funcao como parametro
function run(fun) {
    fun()
}

// Uma funcao pode retornar outra funcao
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)