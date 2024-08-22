import { useState } from 'react'

import ColorBar from './components/ColorBar'
import ColorButton from './components/ColorButton'

function App() {

  return (
    <>
    <ColorBar>
    <ColorButton color={"Red"}></ColorButton>
    <ColorButton color={"Green"}></ColorButton>
    <ColorButton color={"yellow"}></ColorButton>
    <ColorButton color={"blue"}></ColorButton>
    <ColorButton color={"gray"}></ColorButton>
    <ColorButton color={"Black"}></ColorButton>
    <ColorButton color={"Orange"}></ColorButton>
    </ColorBar>
    </>
  )
}

export default App
