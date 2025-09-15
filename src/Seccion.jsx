import React from "react";
import shopifyIcon from "./assets/s.png";
import "./Seccion.css";

function Seccion() {
  return (
    <div className="seccion">
      {/* Icono de Shopify a la izquierda */}
      <div className="icono-shopify">
        <img src={shopifyIcon} alt="Shopify" />
      </div>

      {/* Contenedor de las 4 columnas */}
      <div className="columnas">
        {/* Columna 1 */}
        <div className="columna">
          <h4>Shopify</h4>
          <p>Acerca de nosotros</p>
          <p>Empleos</p>
          <p>Inversionistas</p>
          <p>Prensa y medios</p>
          <p>Partners</p>
          <p>Afiliados</p>
          <p>Afiliados</p>
          <p>Estado del servicio</p>
          <br />
          <br />
          <h4>Soluciones</h4>
          <p>Creador de tiendas online</p>
          <p>Creador de sitios web</p>
        </div>

        {/* Columna 2 */}
        <div className="columna">
          <h4>Atención al cliente</h4>
          <p>
            Atención al cliente <br />
            para comerciantes
          </p>
          <p>
            Centro de ayuda de <br />
            Shopify
          </p>
          <p>Contrata a un partner</p>
          <p>Shopify Academy</p>
          <p>Comunidad de Shopify</p>
        </div>

        {/* Columna 3 */}
        <div className="columna">
          <h4>Desarrolladores</h4>
          <p>Shopify.dev</p>
          <p>Documentación de API</p>
          <p>Dev Degree</p>
        </div>

        {/* Columna 4 */}
        <div className="columna">
          <h4>Productos</h4>
          <p>Shop</p>
          <p>Shopify Plus</p>
          <p>Shopify para empresas</p>
        </div>
      </div>
    </div>
  );
}

export default Seccion;
