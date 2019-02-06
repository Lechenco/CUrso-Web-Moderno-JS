import React from 'react'
import ReactDOM from 'react-dom'

// import Primeiro from './componentes/primeiro'
// import BomDia from './componentes/BomDIa'
// import Saudacao from './componentes/Saudacao'
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(
    <div>
        <Pai nome = 'Gabriel' sobrenome='Lechenco'>
            <Filho nome="Lucas" sobrenome='Lechenco'/>
        </Pai> 

    </div>,    
    document.getElementById('root'))