import React from 'react';
import './App.css'
import { Formulario, Label, ContenedorTerminos, ContenedorBotonCentrado, Boton, MensajeError, MensajeExito } from './elementos/Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import Input from './componentes/Input';

function App() {
  return (
    <main>
      <Formulario action="">
        <Input
          tipo="text"
          label="Usuario"
          placeholder="nombre usuario"
          name="usuario"
          leyendaError="El usuario tiene que ser de 4 a 16 dígitos."
          expresionRegular=""
        />
        <Input
          tipo="password"
          label="Contraseña"
          placeholder="Contraseña"
          name="contraseña"
          leyendaError="La contraseña tiene que ser de 4 a 16 dígitos."
          expresionRegular=""
        />



        <ContenedorTerminos>
          <Label>
            <input type="checkbox" name="terminos" id="terminos" />Acepto los terminos y condiciones
          </Label>
        </ContenedorTerminos>
        {false && <MensajeError>
          <p>
            <FontAwesomeIcon icon={faExclamationTriangle} />
            <b>Error:</b> Por favor rellene el formulario correctamente
          </p>
        </MensajeError>}
        <ContenedorBotonCentrado>
          <Boton type="submit" >Enviar</Boton>
          <MensajeExito>Formulario enviado correctamente!</MensajeExito>
        </ContenedorBotonCentrado>
      </Formulario>
    </main>
  );
}

export default App;
