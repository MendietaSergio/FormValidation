import React from 'react';
import './App.css'
import { Formulario, Label } from './elementos/Formularios'
function App() {
  return (
    <main>
      <Formulario action="">
        <div>
          <Label htmlFor="">Usuario</Label>
          <div>
            <input type="text" placeholder="Usuario" />
          </div>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div>
          <Label htmlFor="">Usuario</Label>
          <div>
            <input type="text" placeholder="Usuario" />
          </div>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </Formulario>
    </main>
  );
}

export default App;
