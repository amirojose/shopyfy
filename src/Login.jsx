import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login({ setUsuarioLogueado }) {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();

  const manejarSubmit = async (e) => {
    e.preventDefault();

    try {
      const respuesta = await fetch("http://localhost/shopyfy/login.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const datos = await respuesta.json();
      setMensaje(datos.message);

      if (datos.success) {
        // Guardamos en localStorage primero
        localStorage.setItem("usuarioLogueado", "true");
        setUsuarioLogueado(true); // actualizamos estado 
        navigate("/inicio"); 
      }
    } catch (error) {
      setMensaje("⚠️ Error de conexión con el servidor");
    }
  };

  return (
    <div className="pagina-login">
      <div className="caja-login">
        <h2>Iniciar sesión</h2>
        <p className="subtitulo">Continuar a Shopyfy</p>

        {!mostrarFormulario ? (
          <button className="boton-login" onClick={() => setMostrarFormulario(true)}>
            Inicia sesión en tu cuenta de Shopyfy
          </button>
        ) : (
          <form className="formulario-login" onSubmit={manejarSubmit}>
            <input
              type="email"
              placeholder="Correo electrónico"
              className="input-login"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Contraseña"
              className="input-login"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="boton-login">Entrar</button>
          </form>
        )}

        {mensaje && <p style={{ marginTop: "10px" }}>{mensaje}</p>}
      </div>
    </div>
  );
}

export default Login;

