import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Inicio.css";
import logo from "./assets/logoshopy.png";
import PanelInicio from "./Panelinicio";

function Inicio({ setUsuarioLogueado }) {
  const [mostrarMenu, setMostrarMenu] = useState(false);

  // Función para alternar el menú "Mi tienda"
  const toggleMenu = () => setMostrarMenu(!mostrarMenu);

  return (
    <div className="contenedor-inicio">
      {/* Barra superior */}
      <header className="barra-superior">
        <div className="header-left">
          <img src={logo} alt="Shopify" className="logo-header" />
        </div>

        <div className="header-center">
          <input type="text" placeholder="Buscar" className="buscador" />
        </div>

        <div className="header-right">
          <span>🔔</span>
          <span>⚙️</span>

          {/* Menú Mi tienda */}
          <div className="mi-tienda-menu">
            <button className="mi-tienda-boton" onClick={toggleMenu}>
              <span className="mi">Mt</span> Mi tienda
            </button>

            {mostrarMenu && (
              <div className="cerrar-menu">
                <button
                  onClick={() => {
                    setUsuarioLogueado(false);               // Actualiza estado global
                    localStorage.removeItem("usuarioLogueado"); // Borra la sesión guardada
                  }}
                >
                  Cerrar sesión
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Contenido principal */}
      <div className="cuerpo-inicio">
        {/* Menú lateral */}
        <aside className="menu-lateral">
          <ul>
            <li><NavLink to="/inicio">Inicio</NavLink></li>
            <li><NavLink to="/productos">Productos</NavLink></li>
            <li><NavLink to="/pedidos">Pedidos</NavLink></li>
            <li><NavLink to="/clientes">Clientes</NavLink></li>
            <li><NavLink to="/marketing">Marketing</NavLink></li>
            <li><NavLink to="/descuentos">Descuentos</NavLink></li>
            <li><NavLink to="/contenido">Contenido</NavLink></li>
            <li><NavLink to="/markets">Markets</NavLink></li>
            <li><NavLink to="/informes">Informes y estadísticas</NavLink></li>
          </ul>
        </aside>

        {/* Área central */}
        <main className="contenido-principal">
          <h1 className="bienvenida">¡Te damos la bienvenida a Shopyfy! 🎉</h1>
          <PanelInicio />
        </main>
      </div>
    </div>
  );
}

export default Inicio;
