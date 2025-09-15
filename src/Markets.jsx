import React from "react";
import "./Markets.css";

function Markets() {
  return (
    <div className="markets-contenedor">
      <h1>Markets</h1>
      <div className="markets-fila">
        {/* Columna 1 */}
        <div className="markets-columna">
          <h3>Mercados</h3>
          <p>Colombia</p>
        </div>

        {/* Columna 2 */}
        <div className="markets-columna">
          <h3>Estado</h3>
          <p className="activo">Activo</p>
        </div>

        {/* Columna 3 */}
        <div className="markets-columna">
          <h3>Incluye</h3>
          <p>Colombia</p>
        </div>

        {/* Columna 4 */}
        <div className="markets-columna">
          <h3>Personalizaciones</h3>
          <p>$</p>
        </div>
      </div>
    </div>
  );
}

export default Markets;

