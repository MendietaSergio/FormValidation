import React from 'react';
import {GrupoInput, Input, LeyendaError, IconoValidacion, Label} from '../elementos/Formularios'
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'



const ComponenteInput = ({estado, cambiarEstado, tipo, label, placeholder, name, leyendaError, expresionRegular}) =>{
  
  const onChange=(e)=>{
    cambiarEstado({...estado, campo: e.target.value})
  }
// para cambiar el estado de valido
  const validacion = ()=>{
    if(expresionRegular){
      if(expresionRegular.test(estado.campo)){
        cambiarEstado({...estado, valido:'true'})
      } else {
        cambiarEstado({...estado, valido:'false'})
      }
    }
  }
  
  return (
        <div>
          <Label htmlFor="nombre">{label}</Label>
          <GrupoInput>
            <Input 
            type={tipo}
            placeholder={placeholder}
            id={name}
            value={estado.campo}
            onChange={onChange}
            onKeyUp={validacion}
            onBlur={validacion}
            valido = {estado.valido}
            />
            <IconoValidacion 
            // condicional para mostrar el icono dependiendo del estado valido.
              icon={estado.valido == 'true'? faCheckCircle:faTimesCircle} 
              valido = {estado.valido}/>
            
          </GrupoInput>
          <LeyendaError valido = {estado.valido}
>{leyendaError}</LeyendaError>
        </div>
        
    )
}

export default ComponenteInput;