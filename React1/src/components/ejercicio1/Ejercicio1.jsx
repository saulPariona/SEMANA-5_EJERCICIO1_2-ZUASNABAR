import '../../css/ejercicio1.css'
import Encabezado from './Encabezado'
import Navegacion from './Navegacion'
import Contenido from './Contenido'
import Lateral from './Lateral'
import Pie from './Pie'

const Ejercicio1 = () => {
  return (
    <div className="pagina">
      <Encabezado />
      <Navegacion />

      <div className="zona-central">
        <Contenido />
        <Lateral />
      </div>

      <Pie />
    </div>
  )
}

export default Ejercicio1