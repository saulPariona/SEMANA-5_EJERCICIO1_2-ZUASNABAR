import Articulo1 from './Articulo1'
import Articulo2 from './Articulo2'

const Contenido = () => {
  return (
    <section className="contenido">
      <p className="etiqueta-seccion">&lt;section&gt;</p>
      <div className="articulos">
        <Articulo1 />
        <Articulo2 />
      </div>
      <p className="etiqueta-seccion">&lt;/section&gt;</p>
    </section>
  )
}

export default Contenido