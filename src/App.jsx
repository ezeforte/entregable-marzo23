import React, { useState } from 'react';
import Card from  './components/Card';
function App() {



  // Definir estados para cada campo del formulario
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mostrarInfo, setMostrarInfo] = useState(false)

  // Definir estado para el mensaje de error
  const [error, setError] = useState('');

  // Función para manejar el envío del formulario
  function handleSubmit(e) {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    // Validar la información ingresada


    if (nombre.length < 3) {
      setError('Por favor chequea que la información sea correcta');
      return;
    }
    if (telefono.length < 6) {
      setError('Por favor chequea que la información sea correcta');
      return;

    }

    if (nombre.trim() === '' || telefono.trim() === '' ) {
      setError('Por favor ingrese todos los campos');
      return;
    }


    // Si todo está bien, mostrar la información ingresada
    setMostrarInfo(true);

    // Limpiar los campos del formulario
    
    
  }

  return (
    <div>
      <h1>Formulario</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </div>
        <div>
          
          <label htmlFor="telefono">Teléfono:</label>
          <input type="tel" id="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
        </div>
        
        <button type="submit">Enviar</button>
      </form>
      {mostrarInfo && <Card nombre={nombre} telefono={telefono} />}
    </div>
  );
}

export default App;
