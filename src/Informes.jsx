import React from "react";
import "./Informes.css";

function Informes() {
  return (
    <div className="informes-contenedor">
      <div className="informes-fila">
        <div className="informes-tarjeta">
          <h3>Ventas brutas</h3>
          <p>0 COP</p>
        </div>
        <div className="informes-tarjeta">
          <h3>Tasas de intereses habituales</h3>
          <p>0%</p>
        </div>
        <div className="informes-tarjeta">
          <h3>Pedidos preparados</h3>
          <p>0</p>
        </div>
        <div className="informes-tarjeta">
          <h3>Pedidos</h3>
          <p>0</p>
        </div>
      </div>
    </div>
  );
}

export default Informes;
