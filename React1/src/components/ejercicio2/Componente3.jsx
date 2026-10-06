import Componente4 from './Componente4'

const Componente3 = ({ datos }) => {
  return (
    <div className="comp3">
      <h3>Componente3</h3>
      <Componente4 datos={datos} />
    </div>
  )
}

export default Componente3