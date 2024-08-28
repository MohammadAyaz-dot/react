import { useState } from 'react'

import CurrencyConverter from './components/CurrencyConverter'

function App() {
  const [count, setCount] = useState(0)
  return (
    <> 
     <CurrencyConverter></CurrencyConverter>
    </>
  )
}

export default App
