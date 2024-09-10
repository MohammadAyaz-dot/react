import Button from "./Button"

const Todo = ({ done,todoContent , onDelete , onUpdate , onDone})=>{

    return(
        <li className="todoLi">
             {
                done? 
                <span style={{textDecoration:"line-through"}}>
                    {todoContent}
                <button onClick={onDone} style={{
                    border:"0px none",
                    padding:"0px",
                    marginLeft:"10px",
                    cursor:"pointer"
                }}>✅</button>
                </span>
                :(
                    <span className="todoContent">
                        {todoContent}
                       <button onClick={onDone} style={{
                        border:"0px none",
                        padding:"0px",
                        marginLeft:"10px",
                        cursor:"pointer"
                    }}>✅</button>
                    </span>
                )
            }
         
        
            <span className="todoButtons">
            <Button onClick={onUpdate} content={"Update"}></Button>
            <Button onClick={onDelete} content={"Delete"}></Button>
            </span>
          
        </li>
    )
}

export default Todo;