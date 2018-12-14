function tratarErroELancar(erro) {
    //throw new Error('...')
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritad(obj){
   try{
    console.log(obj.name.toUpperCase() + '!!!')
   } catch (e) {
       tratarErroELancar(e)
   }
}

const obj = {nome: 'Lechenco'}
imprimirNomeGritad(obj)