import React,{useState}  from 'react';
import './App.css'
import { Formulario, Label, ContenedorTerminos, ContenedorBotonCentrado, Boton, MensajeError, MensajeExito } from './elementos/Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import Input from './componentes/Input';

function App() {
  const  [usuario, cambiarUsuario] = useState({campo:"", valido: null})
  const  [nombre, cambiarNombre] = useState({campor:"", valido: null})
  const  [password, cambiarPassword] = useState({campor:"", valido: null})
  const  [password2, cambiarPassword2] = useState({campor:"", valido: null})
  const  [correo, cambiarCorreo] = useState({campor:"", valido: null})
  const  [telefono, cambiarTelefono] = useState({campor:"", valido: null})
  
  const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{8,14}$/ // 8 a 14 numeros.
  }
  
  return (
    <main>
      <Formulario action="">
        <Input
        estado= {usuario}
        cambiarEstado =  {cambiarUsuario}
          tipo="text"
          label="Usuario"
          placeholder="nombre usuario"
          name="usuario"
          leyendaError="El usuario tiene que ser de 4 a 16 dígitos."
          expresionRegular={expresiones.usuario}
        />
        <Input
        estado = {nombre}
        cambiarEstado = {cambiarNombre}
          tipo="text"
          label="Nombre"
          placeholder="Nombre"
          name="nombre"
          leyendaError="El nombre tiene que ser de 4 a 16 dígitos."
          expresionRegular= {expresiones.nombre}
        />
        <Input
        estado = {password}
        cambiarEstado = {cambiarPassword}
          tipo="password"
          label="Contraseña"
          placeholder="Contraseña"
          name="contraseña"
          leyendaError="La contraseña tiene que ser de 4 a 16 dígitos."
          expresionRegular= {expresiones.password}
        />
        <Input
        estado = {password2}
        cambiarEstado = {cambiarPassword2}
          tipo="password"
          label="Repita la contraseña"
          placeholder="Contraseña"
          name="contraseña2"
          leyendaError="Ambas contraseñas deben ser iguales."
          expresionRegular=""
        />
        <Input
        estado = {correo}
        cambiarEstado = {cambiarCorreo}
          tipo="email"
          label="Correo"
          placeholder="Example@example.com"
          name="correo"
          leyendaError="Debe ser un correo valido."
          expresionRegular= {expresiones.correo}
        />
        <Input
        estado = {telefono}
        cambiarEstado = {cambiarTelefono}
          tipo="text"
          label="Telefono"
          placeholder="112233445566"
          name="telefono"
          leyendaError="El telefono debe tener un maximo de 12 digitos."
          expresionRegular= {expresiones.telefono}
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
