const aprovados = ['Bia', 'Carlos', 'Ana', 'Raquel']

aprovados.forEach(function(nome, indice, array) { // tres parametros
    console.log(`${indice + 1} ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)