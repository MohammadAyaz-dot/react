import { useState } from 'react'
import viteLogo from '/vite.svg'
import FolderUI from './components/FolderUI'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <FolderUI></FolderUI>
    </>
  )
}

export default App
