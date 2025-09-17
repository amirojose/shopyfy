import { useState } from "react"; 
import "./Barra.css"; 
import logo from "./assets/logo.png"; 

function Barra() {
  
  const [solucionesAbierto, setSolucionesAbierto] = useState(false);

  return (
    <div className="barra"> 

      
      <div className="barra-izquierda">
        
        <img src={logo} alt="Shopyfy" className="logo" />

        {/* Menú desplegable "Soluciones" */}
        <div className="menu-desplegable">
          {/* Botón que abre/cierra el menú */}
          <a
            href="#!"
            className="menu-boton"
            onClick={(e) => {
              e.preventDefault(); 
              setSolucionesAbierto(!solucionesAbierto);
            }}
          >
            Soluciones {solucionesAbierto ? "▲" : "▼"} 
          </a>

          {/* menu desplegable de soluciones */}
          {solucionesAbierto && (
            <div className="desplegable-contenido">
              {/* Columna 1 */}
              <div className="columna">
                <h4>Comienza </h4>
                <p><b>Comienza tu negocio. </b><br /><span>Desarrolla tu marca</span></p>
                <p><b>Crea tu sitio web. </b><br /> Editor de tienda online</p>
                <p><b>Personaliza tu tienda. </b><br />Temas para tiendas</p>
                <p><b>Encuentra aplicaciones para <br /> negocios.</b> <br />Tienda de aplicaciones de Shopify</p>
                <p><b>Obtén un dominio propio para tu <br /> sitio</b></p>
                <p><b>Desarrolladores de Shopify.</b> <br />Crea con las API potentes de Shopify</p>
              </div>

              {/* Columna 2 */}
              <div className="columna">
                <h4>Vende </h4>
                <p><b>Vende tus productos.</b> <br />Vende online o en persona</p>
                <p><b>Vende online.</b> <br /> Haz crecer tu negocio online</p>
                <p><b>Vende en distintos canales.</b> <br />Llega a millones de compradores y <br />aumenta tus ventas</p>
                <p><b>Vender en persona.</b> <br /> Point of Sale (POS)</p>
                <p><b>Vende en todo el mundo.</b> <br />Ventas internacionales</p>
                <p><b>Shopify Plus.</b><br />Una solución de comercio para las <br />marcas digitales en crecimiento</p>
              </div>

              {/* Columna 3 */}
              <div className="columna">
                <h4>Mercado 📈</h4>
                <p><b>Promociona tu negocio.</b><br />Llega a nuevos clientes y fidelízalos</p>
                <p><b>Promociona en las redes sociales.</b><br />Integraciones con redes sociales</p>
                <p><b>Chatea con los clientes.</b><br />Shopify Inbox</p>
                <p><b>Fomenta tu relación con los clientes</b><br />Correo electrónico de Shopify</p>
                <p><b>Conoce a tu público.</b><br />Obtén información útil de tus clientes</p>
                <p><b>Todos los productos.</b><br />Descubre todos los productos y <br />funciones de Shopify</p>
              </div>

              {/* Columna 4 */}
              <div className="columna">
                <h4>Gestiona </h4>
                <p><b>Gestiona tu negocio.</b><br />Sigue las ventas, los pedidos, los <br />informes y estadísticas</p>
                <p><b>Mide tu rendimiento.</b><br />Informes y estadísticas</p>
                <p><b>Gestiona tus existencias y los <br /> pedidos</b><br />Gestión de inventario y pedidos</p>
                <p><b>Automatiza tu negocio.</b><br />Shopify Flow</p>
              </div>
            </div>
          )}
        </div>

        {/* Otros enlaces */}
        <a href="#">Precios</a>
        <a href="#">Recursos v</a>
      </div>

      {/* Lado derecho de la barra */}
      <div className="barra-derecha">
        <a href="#">Iniciar sesión</a>
        <button className="boton-gratis">Comienza gratis</button>
      </div>
    </div>
  );
}

export default Barra; 
