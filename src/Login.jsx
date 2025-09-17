import { useState } from "react";
import { useNavigate } from "react-router-dom"; //aqui lo use para movernos entre páginas
import "./Login.css";

function Login({ setUsuarioLogueado }) { // esto lo recibimos desde App.jsx
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
        
        setUsuarioLogueado(true);

      
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
          <button 
            className="boton-login"
            onClick={() => setMostrarFormulario(true)}
          >
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
            <button type="submit" className="boton-login">
              Entrar
            </button>
          </form>
        )}

        {mensaje && <p style={{ marginTop: "10px" }}>{mensaje}</p>}

        <p className="registro">
          ¿Eres nuevo en Shopyfy? <a href="#">Crear cuenta →</a>
        </p>

        <div className="enlaces-pie">
          <a href="#">Ayuda</a>
          <a href="#">Privacidad</a>
          <a href="#">Términos</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
