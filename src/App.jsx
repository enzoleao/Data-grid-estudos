import * as React from 'react';
import Table from './Table'
import {listCargos} from './usuarios'

function App() {
  return (
    <div>
       
        {typeof listCargos !== "undefined" && 
        listCargos.map((value)=>{
          return (<Table
            id={value.id}
            name={value.name}
            sobrenome={value.sobrenome}
            idade={value.idade}
          />)
        })}
       
        
    </div>
  )
}

export default App
