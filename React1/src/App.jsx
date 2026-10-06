import { useState } from 'react'
import Ejercicio1 from './components/ejercicio1/Ejercicio1'
import Componente1 from './components/ejercicio2/Componente1'

function App() {
  const [ejercicio, setEjercicio] = useState(1)

  return (
    <>
      <div style={{ padding: '10px', textAlign: 'center' }}>
        <button onClick={() => setEjercicio(1)}>Ejercicio 1</button>{' '}
        <button onClick={() => setEjercicio(2)}>Ejercicio 2</button>
      </div>

      {ejercicio === 1 ? <Ejercicio1 /> : <Componente1 />}
    </>
  )
}

export default App
