import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputBox from './components/InputBox'

function App() {
  const [count, setCount] = useState(0)
const dummyData={
  inr: {
  aave: 0.000092121698,
  ada: 0.031819746,
  aed: 0.043782351,
  afn: 0.84431209,
  agix: 0.020909262,
  akt: 0.0039742295,
  algo: 0.0879585,
  all: 1.06948874,
  amd: 4.60475747,
  amp: 2.89149621,
  ang: 0.021363656,
  aoa: 10.9387371,
  ape: 0.016956998,
  apt: 0.001655736,
  ar: 0.0004617921,
  arb: 0.020656116}
}
  return (
    <> 
      <InputBox label={"to"} currencyData={dummyData} fieldAllowed={false}></InputBox>

    </>
  )
}

export default App
