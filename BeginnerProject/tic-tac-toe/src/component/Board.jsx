import { useState } from "react";
import Square from "./Square";

export default function Board({xIsNext,square,onPlay}){
  

    // To check whose move is next
    // const [xIsNext, setXIsNext] = useState(true);
    // const[squares,setSquares] = useState(Array(9).fill(null));
    // Commeting it beacuse state is now lifted to GAME component

    const winner = calculateWinner(square);
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (xIsNext ? "X" : "O");
    }

    const handleClick =(i)=>{
        const nextSquare =square.slice(i)
        
        if(square[i] || calculateWinner(square)) return; // Early Return if the square already have value OR Someone Win
        if(xIsNext)
        {
            nextSquare[i]="X"
        }
        else{
            nextSquare[i]="O"
        }

        // Commeting it beacuse state is now lifted to GAME component
        // setSquares(nextSquare);
        // setXIsNext(prev=>!prev)

        onPlay(nextSquare)
    }

    return (
        <>
        <div className="board-row">
            {/* we use anonymous arrow function in onSquareClick because => if we use handleClick(0) Directly with parameter 0 it calls automatically and we want handleClick to be run only when someone click, otherwise we trap inside INFINITE Rerender because every time APP re-render handleClick(0) call again and again  */}
          <Square value={square[0]} onSquareClick={()=>handleClick(0)} ></Square>  {}
          <Square value={square[1]}  onSquareClick={()=>handleClick(1)} ></Square>
          <Square value={square[2]}  onSquareClick={()=>handleClick(2)} ></Square>
        </div>
        <div className="board-row">
          <Square value={square[3]} onSquareClick={()=>handleClick(3)}></Square>
          <Square value={square[4]} onSquareClick={()=>handleClick(4)} ></Square>
          <Square value={square[5]} onSquareClick={()=>handleClick(5)} ></Square>  
        </div>
        <div className="board-row">
          <Square value={square[6]}  onSquareClick={()=>handleClick(6)} ></Square>
          <Square value={square[7]}  onSquareClick={()=>handleClick(7)} ></Square>
          <Square value={square[8]}  onSquareClick={()=>handleClick(8)} ></Square>
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