import { useState } from "react";
import "./Panelinicio.css";
import logotarjetas from "./assets/logotarjetas.png";
import bandera from "./assets/bandera.png";
import silla from "./assets/silla.png";
import cuadrado from "./assets/cuadrado.png";

function PanelInicio() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  return (
    <div className="panel-contenedor">
      {/* Fila 1 */}
      <div className="fila">
        {/* Tarjeta 1 */}
        <div className="tarjeta tarjeta-grande">
          <img src={silla} alt="Producto ejemplo" className="icono-producto" />
          <h3>Agrega tu primer producto</h3>

          {!mostrarFormulario ? (
            <>
              <p>
                Empieza por agregar un producto y algunos datos clave. <br />
                ¿No quieres comenzar aún?{" "}
                <a href="#">Empieza con un producto de muestra</a>
              </p>
              <button
                className="boton-negro"
                onClick={() => setMostrarFormulario(true)}
              >
                Agregar producto
              </button>
              <button className="boton">Importar</button>
            </>
          ) : (
            <form className="formulario-producto">
              <label>
                Título:
                <input type="text" name="titulo" placeholder="Título del producto" />
              </label>

              <label>
                Descripción:
                <textarea name="descripcion" placeholder="Describe tu producto..." />
              </label>

              <label>
                Multimedia:
                <input type="file" name="imagenes" multiple />
              </label>

              <label>
                Categoría:
                <input type="text" name="categoria" placeholder="Ej: Ropa, Electrónica" />
              </label>

              <label>
                Precio:
                <input type="number" name="precio" placeholder="0.00" />
              </label>

              <button type="submit" className="boton-negro">Guardar producto</button>
            </form>
          )}
        </div>

        {/* Tarjeta 2 */}
        <div className="tarjeta tarjeta-grande">
          <img src={cuadrado} alt="Personalizar tienda" className="icono-producto" />
          <h3>Personalizar tu tienda online</h3>
          <p>Agrega un logo, colores e imágenes para dar vida a tu marca.</p>
          <button className="boton">Personalizar tema</button>
        </div>
      </div>

      {/* Fila 2 */}
      <div className="fila fila-pequena">
        {/* Tarjeta 3 */}
        <div className="tarjeta tarjeta-pequena">
          <h3>Agrega formas de pago</h3>
          <p>Configura métodos de pago como PayPal, Visa, Mastercard y más.</p>
          <img src={logotarjetas} alt="Formas de pago" className="icono" />
          <button className="boton">Activar</button>
        </div>

        {/* Tarjeta 4 */}
        <div className="tarjeta tarjeta-pequena">
          <h3>Revisa tus tarifas de envío</h3>
          <p>Configura envíos nacionales e internacionales.</p>
          <img src={bandera} alt="Tarifas de envío" className="icono" />
          <button className="boton">Revisar</button>
        </div>

        {/* Tarjeta 5 */}
        <div className="tarjeta tarjeta-pequena">
          <h3>Personaliza tu dominio</h3>
          <p>Agrega un dominio para tu tienda (ej: mitienda.com).</p>
          <button className="boton">Personalizar dominio</button>
        </div>
      </div>
    </div>
  );
}

export default PanelInicio;
