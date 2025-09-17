import React from "react";
import "./Marketing.css"; 

function Marketing() {
  return (
    <div className="marketing-contenedor">
      <h1>Marketing 📈</h1>
      
      {/* Fila superior */}
      <div className="fila-marketing">
        <div className="tarjeta-marketing">Sesiones de la tienda online</div>
        <div className="tarjeta-marketing">Tasa de conversión de la tienda online</div>
        <div className="tarjeta-marketing">Valor medio del pedido</div>
      </div>

      {/* Fila inferior */}
      <div className="fila-marketing">
        <div className="tarjeta-marketing">Ingresos totales</div>
        <div className="tarjeta-marketing">Ventas atribuidas al marketing</div>
        <div className="tarjeta-marketing">Pedidos atribuidos al marketing</div>
      </div>
    </div>
  );
}

export default Marketing;
