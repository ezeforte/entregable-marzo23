function Card(props) {
  return (
    <div>
      <h2>Información ingresada:</h2>
      <p>Nombre: {props.nombre}</p>
      <p>Teléfono: {props.telefono}</p>
      
    </div>
  );
}

export default Card;