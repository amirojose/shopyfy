import React from "react";
import "./Pedidos.css"; // archivo de estilos
import pedidosImg from "./assets/pedidos.png"; // ruta correcta a la imagen

function Pedidos() {
  return (
    <div className="pedidos-contenedor">
      <div className="pedido-card">
        <img src={pedidosImg} alt="Pedidos" className="pedido-imagen" />
        <p className="pedido-texto">
          Para obtener pedidos y aceptar pagos de clientes, debes seleccionar un plan.
          Solo se te cobrará el plan cuando finalice tu prueba gratis.
        </p>
        <button className="pedido-boton">Escoger plan</button>
      </div>
    </div>
  );
}

export default Pedidos;

