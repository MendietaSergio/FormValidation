import React from 'react';
import './App.css'
import { Formulario, Label, GrupoInput, Input, LeyendaError,IconoValidacion } from './elementos/Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle,faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
function App() {
  return (
    <main>
      <Formulario action="">
        <div>
          <Label htmlFor="nombre">Usuario</Label>
          <GrupoInput>
            <Input type="text" placeholder="Usuario" id="nombre" />
            <IconoValidacion icon={faCheckCircle}/>
          </GrupoInput>
          <LeyendaError>Lorem ipsum dolor sit amet.</LeyendaError>
        </div>
        <div>
          <Label htmlFor="">Usuario</Label>
          <GrupoInput>
            <Input type="text" placeholder="Usuario" />
          </GrupoInput>
          <LeyendaError>Lorem ipsum dolor sit amet.</LeyendaError>
        </div>
        <div>
          <Label>
            <input type="checkbox" name="terminos" id="terminos" />Acepto los terminos y condiciones
          </Label>
        </div>
        <div>
          <p>
            <FontAwesomeIcon icon={faExclamationTriangle} />
            <b>Error:</b> Por favor rellene el formulario correctamente
          </p>
        </div>
        <div>
          <button type="submit" >Enviar</button>
          <p>Formulario enviado correctamente!</p>
        </div>
      </Formulario>
    </main>
  );
}

export default App;
