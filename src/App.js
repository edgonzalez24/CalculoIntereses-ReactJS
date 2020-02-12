import React, {useState}from 'react';
import './App.css';
import Header from './components/Header.js'
import Formulario from './components/Formulario.js'; 
import Mensaje from './components/Mensaje.js';
import Resultado from './components/Resultado.js';
import Spinner from './components/Spinner.js'

function App() {
  // Leer datos del formulario desde el componente padre
  // Variable-Funcion
  const [cantidad, guardarCantidad]= useState(0);
  // En el select, existe un value que no es N, por lo cual incializamos con un string
  const [plazo, guardarPlazo] = useState('');
  // Guardar el total calculado
  const [total, guardarTotal] = useState(0);
  // Carga Load Spinner
  const [cargando, guardarCargando] = useState(false)

  // Carga Condicional de componentes
  let componente;
  if(cargando) {
    componente = <Spinner />
  }
  else if(total === 0){
    componente = <Mensaje/>
  } else {
    componente = <Resultado 
                total = {total} 
                plazo = {plazo}
                cantidad = {cantidad}  
                />
  }
  return (
    <div className="App">
      <Header 
      titulo="Cotizador de prestamos"
      description ="Utiliza el formulario y obtén una cotización"
       />
       <div className="container" >
        <Formulario 
        cantidad = {cantidad}
        guardarCantidad = {guardarCantidad}
        plazo = {plazo}
        guardarPlazo = {guardarPlazo}
        total = {total} 
        guardarTotal = {guardarTotal}
        guardarCargando = {guardarCargando}
        />
        <div className="Mensajes">
          {componente}
        </div>  
       </div>
  
    </div>
  );
}

export default App;
