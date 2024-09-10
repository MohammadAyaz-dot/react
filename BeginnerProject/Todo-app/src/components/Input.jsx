
const Input = ({value , onChange})=>{

    return(
      
           <input
           value={value} onChange={onChange} className="inputBox" type="text" placeholder="Add Todo" />
    )
}

export default Input;