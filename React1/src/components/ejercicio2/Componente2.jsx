import Componente3 from './Componente3'

const Componente2 = ({ datos }) => {
  return (
    <div className="comp2">
      <h3>Componente4</h3>
      <Componente3 datos={datos} />
    </div>
  )
}

export default Componente2