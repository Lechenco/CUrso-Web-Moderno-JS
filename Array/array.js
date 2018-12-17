console.log(typeof Array)
console.log(typeof new Array)
console.log(typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados)

aprovados[9] = 'Rafael'
console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados)

aprovados = ['BIa', 'Carlos', 'Ana']
aprovados.splice(1, 1)
console.log(aprovados)