import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputBox from './components/InputBoc'
import Wrapper from './components/Wrapper'
import ParametresField from './components/Parametres'

function App() {
  const[range,setRange]= useState(5)
  const[charAllowed,setCharAllowed] = useState(false);
  const [numAllowed , setNumAllowed]= useState(false);

  return (
    <>

    <Wrapper>
    <InputBox/>
    <ParametresField charAllowed={charAllowed} numAllowed={numAllowed} range={range}/>
    </Wrapper>
   
    </>
  )
}

export default App
