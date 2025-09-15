import React from "react";
import "./Contenido.css";
import contenidoImg from "./assets/contenido.png"; // asegúrate de que la imagen esté en src/assets

function Contenido() {
  return (
    <div className="contenido-contenedor">
      <h1>Contenido 📁</h1>

      <div className="tarjeta-contenido">
        <img src={contenidoImg} alt="Contenido" className="imagen-arriba" />
        <h2>Sube y gestiona tus archivos</h2>
        <p>Los archivos pueden ser imágenes, videos, documentos y más.</p>
        <button className="boton-subir">Subir archivo</button>
      </div>
    </div>
  );
}

export default Contenido;
