
import ColorBar from './components/ColorBar'
import ColorButton from './components/ColorButton'

function App() {
// const [ colors , setColor]= useState("white");

const handleClick = (e:any)=>{
 
  const body=document.querySelector("body");
  if(body){
    body.style.backgroundColor = e.target?.textContent;
  }
  
}

  return (
    <>
    <ColorBar >
    <ColorButton color={"Red"} onChangeBg={handleClick}></ColorButton>
    <ColorButton color={"Green"}onChangeBg={handleClick}></ColorButton>
    <ColorButton color={"yellow"} onChangeBg={handleClick}></ColorButton>
    <ColorButton color={"blue"} onChangeBg={handleClick}></ColorButton>
    <ColorButton color={"gray"} onChangeBg={handleClick}></ColorButton>
    <ColorButton color={"Black"} onChangeBg={handleClick}></ColorButton>
    <ColorButton color={"Orange"} onChangeBg={handleClick}></ColorButton>
    </ColorBar>
    </>
  )
}

export default App
