import { useState } from 'react'
import Board from './component/Board'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Board></Board>
    </>
  )
}

export default App
