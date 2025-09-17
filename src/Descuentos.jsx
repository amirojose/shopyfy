import React from "react";
import "./Descuentos.css";
import descuentosImg from "./assets/descuentos.png"; 

function Descuentos() {
  return (
    <div className="descuentos-contenedor">
      <h1>Descuentos 💸</h1>

      <div className="tarjeta-descuento">
        <img src={descuentosImg} alt="Descuentos" className="imagen-arriba" />
        <h2>Gestiona descuentos y promociones</h2>
        <p>
          Agrega códigos de descuento y descuentos automáticos que se aplican en la pantalla de pago. También puedes usar descuentos con <a href="#">precios de comparación</a>.
        </p>
        <button className="boton-crear">Crear descuento</button>
      </div>
    </div>
  );
}

export default Descuentos;
