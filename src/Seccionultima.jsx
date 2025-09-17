
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Seccionultima.css";

const SeccionUltima = () => {
  return (
    <footer className="seccion-ultima">
      <div className="contenedor-pie">
        {/* Parte izquierda */}
        <div className="pie-izquierda">
          <span>🌐 Colombia | Español ▼</span>
        </div>

        {/* Parte central */}
        <div className="pie-centro">
          <a href="#">Términos del servicio</a>
          <a href="#">Política de privacidad</a>
          <a href="#">Mapa del sitio</a>
        </div>

        {/* Parte derecha */}
        <div className="pie-derecha">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-x-twitter"></i>
          <i className="fab fa-youtube"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-tiktok"></i>
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-pinterest"></i>
        </div>
      </div>
    </footer>
  );
};

export default SeccionUltima;
