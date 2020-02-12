import React, {useState}from 'react';
import './App.css';
import Header from './components/Header.js'
import Formulario from './components/Formulario.js'

function App() {

  const [cantidad, guardarCantidad]= useState(0);
  const leerCantidad = (e) => {
    guardarCantidad(parseFloat(e.target.value))
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
        
        />
       </div> 
    </div>
  );
}

export default App;
