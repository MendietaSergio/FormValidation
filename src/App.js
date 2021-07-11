import React,{useState}  from 'react';
import './App.css'
import { Formulario, Label, ContenedorTerminos, ContenedorBotonCentrado, Boton, MensajeError, MensajeExito } from './elementos/Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import Input from './componentes/Input';

function App() {
  const  [usuario, cambiarUsuario] = useState({campo:"", valido: null})
  const  [nombre, cambiarNombre] = useState({campo:"", valido: null})
  const  [password, cambiarPassword] = useState({campo:"", valido: null})
  const  [password2, cambiarPassword2] = useState({campo:"", valido: null})
  const  [correo, cambiarCorreo] = useState({campo:"", valido: null})
  const  [telefono, cambiarTelefono] = useState({campo:"", valido: null})
  const [terminos, cambiarTerminos] = useState(false);
  const [formularioValido, cambiarFormularioValido] = useState(null);

  const expresiones = {
    usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{8,14}$/ // 8 a 14 numeros.
  }
  
  const validarPassword2 = () =>{
    if(password.campo.length >0){
      if(password.campo !== password2.campo){
      
        cambiarPassword2((prevState)=>{
          return {...prevState, valido : 'false'}
        })
      }else {
        cambiarPassword2((prevState)=>{
          return {...prevState, valido : 'true'}
        })        
      }
    }
  }

  const onChangeTerminos = (e) => {
    cambiarTerminos(e.target.checked)
  }

  const enviar =(e)=>{
    e.preventDefault();

    if(
      usuario.valido === 'true' && 
      nombre.valido === 'true' &&
      password.valido === 'true' &&
      password2.valido === 'true' &&
      correo.valido === 'true' &&
      telefono.valido === 'true' &&
      terminos.valido === 'true'){
        cambiarFormularioValido(true)
        cambiarUsuario({campo: "", valido: null})
        cambiarNombre({campo: "", valido: null})
        cambiarPassword({campo: "", valido: null})
        cambiarPassword2({campo: "", valido: null})
        cambiarCorreo({campo: "", valido: null})
        cambiarTelefono({campo: "", valido: null})
      } else{
        cambiarFormularioValido(false)
      }
  }


  return (
    <main>
      <Formulario action="" onSubmit={enviar}>
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
          funcion = {validarPassword2}
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
            <input 
            type="checkbox"
            name="terminos" 
            id="terminos" 
            checked= {terminos}
            onChange={onChangeTerminos}
            />Acepto los terminos y condiciones
          </Label>
        </ContenedorTerminos>
        {formularioValido === false && <MensajeError>
          <p>
            <FontAwesomeIcon icon={faExclamationTriangle} />
            <b>Error:</b> Por favor rellene el formulario correctamente
          </p>
        </MensajeError>}
        <ContenedorBotonCentrado>
          <Boton type="submit" >Enviar</Boton>
          {formularioValido && <MensajeExito>Formulario enviado correctamente!</MensajeExito> }
        </ContenedorBotonCentrado>
      </Formulario>
    </main>
  );
}

export default App;
