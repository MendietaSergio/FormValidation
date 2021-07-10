import React from 'react';
import {GrupoInput, Input, LeyendaError, IconoValidacion, Label} from '../elementos/Formularios'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'



const ComponenteInput = ({tipo, label, placeholder, name, leyendaError, expresionRegular}) =>{
    return (
        <div>
          <Label htmlFor="nombre">{label}</Label>
          <GrupoInput>
            <Input type={tipo} placeholder={placeholder} id={name} />
            <IconoValidacion icon={faCheckCircle}/>
          </GrupoInput>
          <LeyendaError>{leyendaError}</LeyendaError>
        </div>
        
    )
}

export default ComponenteInput;