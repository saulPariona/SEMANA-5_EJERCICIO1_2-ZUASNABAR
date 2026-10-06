const Componente4 = ({ datos }) => {
  return (
    <div className="comp4">
      <h3>Componente4</h3>

      <div className="card">
        <h4>{datos.nombre}</h4>
        <p><strong>Dirección:</strong> {datos.direccion}</p>
        <p><strong>Ciudad:</strong> {datos.ciudad}</p>
      </div>
    </div>
  )
}

export default Componente4