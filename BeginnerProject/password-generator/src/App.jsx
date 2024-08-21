import { useEffect, useState } from 'react'
import InputBox from './components/InputBoc'
import Wrapper from './components/Wrapper'
import ParametresField from './components/Parametres'

function App() {
  const[password,setPassword] =useState("")
  const[range,setRange]= useState(5)
  const[charAllowed,setCharAllowed] = useState(false);
  const [numAllowed , setNumAllowed]= useState(false);
  

  useEffect(()=>{
    let str ="QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuioplkjhgfdsazxcvbnm";
    
    if(charAllowed){
      str+= "!@#$%^&*()+{}[]";
    }
    if(numAllowed){
      str+="1234567890";
    }
    let temp="";
    for(let i=0;i<range;i++){
      temp+= str.charAt(Math.floor(Math.random()*str.length-1));
    }
      setPassword(temp);
      console.log(password)
  },[charAllowed,numAllowed,range])

  return (
    <>

    <Wrapper>
    <InputBox password={password}/>
    <ParametresField charAllowed={charAllowed} numAllowed={numAllowed} setCharAllowed={setCharAllowed} setNumAllowed={setNumAllowed} range={range} setRange={setRange}/>
    </Wrapper>
   
    </>
  )
}

export default App
