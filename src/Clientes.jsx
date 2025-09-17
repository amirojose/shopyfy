import React from "react";
import "./Clientes.css"; 
import clientesImg from "./assets/clientes.png"; 

function Clientes() {
  return (
    <div className="clientes-contenedor">
      <div className="clientes-card">
        <div className="clientes-izquierda">
          <p className="clientes-texto">
            Todo lo relacionado con clientes en un solo lugar.<br />
            Gestiona la información de los clientes, consulta su historial de pedidos y agrúpalos en segmentos.
          </p>
          <div className="clientes-botones">
            <button className="boton-agregar">Agregar clientes</button>
            <button className="boton-importar">Importar clientes</button>
          </div>
        </div>
        <div className="clientes-derecha">
          <img src={clientesImg} alt="Clientes" className="clientes-imagen" />
        </div>
      </div>
    </div>
  );
}

export default Clientes;
