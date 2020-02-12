import React from 'react'


const Resultado = (props) => {
    const {total, plazo, cantidad} = props; 
    return (
        <div className="u-full-width resultado">
            <h2>Resumen</h2>
        <p>La cantidad solictada es: $ {cantidad}</p>
        <p>A pagar en: {plazo} meses</p>
    <p>Su pago mensual es de: $ {(total / plazo).toFixed(2)}</p>
        <p>Total a pagar: $ {(total).toFixed(2)}</p>
        </div>
    );
}


export default Resultado;