import { useState, useEffect } from "react";
import "./Productos.css";

function Productos() {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [categoria, setCategoria] = useState("");
  const [precio, setPrecio] = useState("");
  const [imagenes, setImagenes] = useState([]);
  const [productos, setProductos] = useState([]);

  // Cargamos productos desde PHP al iniciar
  useEffect(() => {
    fetch("http://localhost/productosshopyfy/productos.php")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setProductos(data.productos);
        }
      })
      .catch((err) => console.error("Error cargando productos", err));
  }, []);

  const manejarImagenes = (e) => {
    setImagenes([...e.target.files]);
  };
  // subir productos al php

  const manejarSubmit = async (e) => {
    e.preventDefault();

    //creamos el objeto para enviarlos al servidor
    const formData = new FormData();
    formData.append("titulo", titulo);
    formData.append("descripcion", descripcion);
    formData.append("categoria", categoria);
    formData.append("precio", precio);

    imagenes.forEach((img) => {
      formData.append("imagenes[]", img);
    });

    try {
      const respuesta = await fetch("http://localhost/productosshopyfy/productos.php", {
        method: "POST",
        body: formData,
      });

      const datos = await respuesta.json();

      if (datos.success) {
        alert("✅ Producto guardado");

        // Recargar lista con el producto recién agregado
        setProductos([...productos, datos.producto]);

        // Limpiar formulario
        setTitulo("");
        setDescripcion("");
        setCategoria("");
        setPrecio("");
        setImagenes([]);
      } else {
        alert("⚠️ Error: " + datos.message);
      }
    } catch (error) {
      alert("⚠️ No se pudo conectar al servidor");
    }
  };

  return (
    <div className="productos-contenedor">
      <h2>Agregar producto</h2>
      <form className="formulario-producto" onSubmit={manejarSubmit}>
        <label>Título</label>
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
        />

        <label>Descripción</label>
        <textarea
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          required
        ></textarea>

        <label>Multimedia (imágenes)</label>
        <input type="file" multiple onChange={manejarImagenes} />

        <label>Categoría</label>
        <input
          type="text"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        />

        <label>Precio</label>
        <input
          type="number"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          required
        />

        <button type="submit" className="boton-guardar">
          Guardar producto
        </button>
      </form>

      <hr />

      <h2>📦 Lista de productos</h2>
      <div className="lista-productos">
        {productos.length === 0 ? (
          <p>No hay productos todavía</p>
        ) : (
          productos.map((p) => (
            <div key={p.id} className="producto-card">
              <h3>{p.titulo}</h3>
              <p>{p.descripcion}</p>
              <p><b>Precio:</b> ${p.precio}</p>
              <p><b>Categoría:</b> {p.categoria}</p>
              {p.imagen && p.imagen.split(",").map((img, index) => (
                <img
                  key={index}
                  src={`http://localhost/productosshopyfy/${img}`}
                  alt={p.titulo}
                  className="imagen-producto"
                />
              ))}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Productos;
