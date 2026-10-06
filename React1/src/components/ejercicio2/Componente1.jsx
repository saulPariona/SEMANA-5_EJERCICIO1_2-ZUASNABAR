import '../../css/ejercicio2.css'
import Componente2 from './Componente2'

const Componente1 = () => {
  const persona = {
    nombre: 'Jaime',
    direccion: 'Jr. Junin 450',
    ciudad: 'Huancayo',
  }

  return (
    <div className="comp1">
      <h3>Componente1</h3>
      <Componente2 datos={persona} />
    </div>
  )
}

export default Componente1