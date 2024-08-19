import { useState } from "react";
import Square from "./Square";

export default function Board(){
  

    // To check whose move is next
    const [xIsNext, setXIsNext] = useState(true);
    const[squares,setSquares] = useState(Array(9).fill(null));

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (xIsNext ? "X" : "O");
    }

    const handleClick =(i)=>{
        const nextSquare =[...squares]
        
        if(squares[i] || calculateWinner(squares)) return; // Early Return if the square already have value OR Someone Win
        if(xIsNext)
        {
            nextSquare[i]="X"
        }
        else{
            nextSquare[i]="O"
        }
        setSquares(nextSquare);
        setXIsNext(prev=>!prev)
    }

    return (
        <>
        <div className="board-row">
            {/* we use anonymous arrow function in onSquareClick because => if we use handleClick(0) Directly with parameter 0 it calls automatically and we want handleClick to be run only when someone click, otherwise we trap inside INFINITE Rerender because every time APP re-render handleClick(0) call again and again  */}
          <Square value={squares[0]} onSquareClick={()=>handleClick(0)} ></Square>  {}
          <Square value={squares[1]}  onSquareClick={()=>handleClick(1)} ></Square>
          <Square value={squares[2]}  onSquareClick={()=>handleClick(2)} ></Square>
        </div>
        <div className="board-row">
          <Square value={squares[3]} onSquareClick={()=>handleClick(3)}></Square>
          <Square value={squares[4]} onSquareClick={()=>handleClick(4)} ></Square>
          <Square value={squares[5]} onSquareClick={()=>handleClick(5)} ></Square>  
        </div>
        <div className="board-row">
          <Square value={squares[6]}  onSquareClick={()=>handleClick(6)} ></Square>
          <Square value={squares[7]}  onSquareClick={()=>handleClick(7)} ></Square>
          <Square value={squares[8]}  onSquareClick={()=>handleClick(8)} ></Square>
        </div>
        {status}
        </>
    )
   
}

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }