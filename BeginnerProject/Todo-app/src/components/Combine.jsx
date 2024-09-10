import Wrapper from "./Wrapper";
import Input from "./Input";
import Button from "./Button";
import Todo from "./Todo";
import todos from "../demoData";
import { useState } from "react";


const Combine =()=>{
    const [todoText ,setTodText] = useState("")
    const [allTodos , setallTodos] = useState(todos)

    const handleInputChange=(e)=>{
        setTodText(e.target.value)
    }

    const handleAddTodo= ()=>{
        const newTodo= {
            id: new Date().getTime(),
            content:todoText,
            done:false
        }

        setallTodos([...allTodos,newTodo])
        setTodText("")
    }

    const handleDelete=(idx)=>{
        allTodos.splice(idx,1)
        setallTodos([...allTodos])
    }

    const handleDone=(idx)=>{
        const newArr = [...allTodos]
        newArr[idx].done= newArr[idx].done? false :true;
        setallTodos(newArr)
    }
   
    const handleUpdate=(idx)=>{
        <Button content={"Update"}/>
    }
    

    // console.log(todos)
    return (
        <Wrapper>
            <div className="addTodoContainer">
            <Input value ={todoText} onChange={(e)=>handleInputChange(e)}/>
            <Button onClick={handleAddTodo} content={"Add"}/>
            </div>
          
            <ul>
                {
                    allTodos.map((todo,idx)=> {
                        
                        return(
                    <Todo key={todo.id} done={todo.done} onDone={()=>handleDone(idx)} todoContent={todo.content} onDelete={()=>handleDelete(idx)} onUpdate={()=>handleUpdate(idx)}/>)
                })
                }
            </ul>
        </Wrapper>
    )
}

export default Combine;