import React, {Fragment,useState} from 'react';
import {calcularTotal} from '../helpers'


// Agregar las props desde el componente padre
const Formulario = (props) => {
    const {cantidad, guardarCantidad, plazo, guardarPlazo, total, guardarTotal,guardarCargando} = props;
    // Definir el state
    const [error, guardarError] = useState(false)
    // Validar formulario
    const calcularPrestamo = e =>  {
        e.preventDefault();
        if(cantidad === 0 || plazo === '' ){ 
            guardarError(true); 
            // Se agregar el return para que no siga a la siguiente linea
            return; 
        }
        // Guardar el error previo
        guardarError(false)

        // Habilitar spinner
        guardarCargando(true)
        setTimeout(() => {
            // Agregando la function de calculo
            const total = calcularTotal(cantidad,plazo);
            // Una vez calculado guardar el total
            guardarTotal(total)
            // Deshabilitar spinner
            guardarCargando(false)
        },3000)
        
    }

  return ( 
    <Fragment>
      <form onSubmit={calcularPrestamo}>
        <span>Valor de la cantidad {cantidad}</span> <br/>
        <span>Valor del plazo Seleccionado {plazo}</span> 

          <div className="row">
              <div>
                  <label>Cantidad Prestamo</label>
                  <input 
                      className="u-full-width" 
                      type="number" 
                      placeholder="Ejemplo: 3000" 
                      onChange = {e => guardarCantidad(parseFloat(e.target.value))}
                  />
              </div>
              <div>
                  <label>Plazo para Pagar</label>
                  <select 
                      className="u-full-width"
                      onChange = {e => guardarPlazo(parseFloat(e.target.value))}
                  >
                      <option value="">Seleccionar</option>
                      <option value="3">3 meses</option>
                      <option value="6">6 meses</option>
                      <option value="12">12 meses</option>
                      <option value="24">24 meses</option>
                  </select>
              </div>
              <div>
                  <input 
                      type="submit" 
                      value="Calcular" 
                      className="button-primary u-full-width" 
                  />
              </div>
          </div>
  </form>
  {(error) ? <p className="error">Todos los campos son obligatorios</p> : null }
  
    </Fragment>
   );
}
 
export default Formulario;