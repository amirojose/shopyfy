import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Barra from "./Barra";
import Inicio from "./Inicio";
import Productos from "./Productos";
import Pedidos from "./Pedidos";
import Clientes from "./Clientes";
import Marketing from "./Marketing";
import Descuentos from "./Descuentos";
import Contenido from "./Contenido";
import Informes from "./Informes";
import Login from "./Login";
import Seccion from "./Seccion";
import SeccionUltima from "./SeccionUltima.jsx";

function App() {
  // Estado global del login
  const [usuarioLogueado, setUsuarioLogueado] = useState(false);

  // Revisar localStorage al montar
  useEffect(() => {
    const guardado = localStorage.getItem("usuarioLogueado");
    setUsuarioLogueado(guardado === "true");
  }, []);

  // Mantener sincronizado con localStorage
  useEffect(() => {
    localStorage.setItem("usuarioLogueado", usuarioLogueado);
  }, [usuarioLogueado]);

  return (
    <Router>
      {!usuarioLogueado ? (
        // 👇 Antes de iniciar sesión
        <>
          <Barra />
          <Login setUsuarioLogueado={setUsuarioLogueado} />
          <Seccion />
          <SeccionUltima />
        </>
      ) : (
        // 👇 Después de iniciar sesión
        <Routes>
          <Route
            path="/inicio"
            element={<Inicio setUsuarioLogueado={setUsuarioLogueado} />}
          />
          <Route path="/productos" element={<Productos />} />
          <Route path="/pedidos" element={<Pedidos />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/descuentos" element={<Descuentos />} />
          <Route path="/contenido" element={<Contenido />} />
          <Route path="/informes" element={<Informes />} />
          {/* 👇 Si entras a cualquier ruta sin iniciar sesión */}
          <Route path="*" element={<Inicio setUsuarioLogueado={setUsuarioLogueado} />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;

