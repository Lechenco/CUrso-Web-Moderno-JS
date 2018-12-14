function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const compraTv50 = trabalho1 && trabalho2
    //const compraTv30 = !!(trabalho1 ^ trabalho2)
    const compraTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete  // operador unario

    return {comprarSorvete, 
        compraTv50, 
        compraTv32, 
        manterSaudavel
    }
}

console.log(compras(true, true))
console.log(compras(false, false))
console.log(compras(true, false))
console.log(compras(false, true))