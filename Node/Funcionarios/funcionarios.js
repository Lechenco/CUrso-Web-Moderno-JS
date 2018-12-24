const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data

    const getChina = func => func.pais === 'China'
    const getWomen = func => func.genero === 'F'
    const maiorSalario = (acum, func) => {
        return func.salario > acum.salario ? func : acum
    }

    const ans = funcionarios
        .filter(getChina)
        .filter(getWomen)
        .reduce(maiorSalario)
    
    console.log(ans)


})