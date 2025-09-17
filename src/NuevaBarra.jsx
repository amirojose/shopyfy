import React from "react";
import "./NuevaBarra.css";

function NuevaBarra() {
  return (
    <div className="nueva-barra">
      <div className="logo">
        <h2>Shopyfy Panel</h2>
      </div>
      <nav className="menu">
        <a href="#">Inicio</a>
        <a href="#">Productos</a>
        <a href="#">Pedidos</a>
        <a href="#">Clientes</a>
        <a href="#">Configuración</a>
      </nav>
      <div className="usuario">
        <span>👤 Mi cuenta</span>
      </div>
    </div>
  );
}

export default NuevaBarra;
