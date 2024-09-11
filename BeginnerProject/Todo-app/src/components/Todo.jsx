import { useState } from "react";
import Button from "./Button"

const Todo = ({ done,todoContent , onDelete , onUpdate , onDone})=>{
    const [isEditable, setIsEditable] = useState(false);
    const [updateMsg, setUpdateMsg] = useState(todoContent)

    const editTodo=()=>{
        onUpdate(updateMsg)
        setIsEditable(false)
    }
    
    return(
        <li className="todoLi">


           <span>
           <input type="checkbox" name="complete" id="complete"
            checked={done}
            onChange={onDone}
            />

            <input className={done? "line-through":" "} type="text" name="todo" id="todo"
            value={updateMsg}
            readOnly={!isEditable}
            onChange={(e)=>{setUpdateMsg(e.target.value)}}
             />
           </span>
            <span className="todoButtons">
            <Button     onClick={() => {
                    if (done) return;

                    if (isEditable) {
                        editTodo();
                    } else setIsEditable((prev) => !prev);
                }}
                disabled={done} content={"Update"}></Button>
            <Button onClick={onDelete} content={"Delete"}></Button>
            </span>
          
        </li>
    )
}

export default Todo;