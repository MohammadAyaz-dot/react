import { useState } from "react"
import Board from "./Board"

// 1 write a new top-level component called Game to display a list of past moves. 
export default function Game(){
    
    const[xIsNext, setXIsNext] =useState(true)
    //2 Notice how [Array(9).fill(null)] is an array with a single item, which itself is an array of 9 nulls.
    const[history,setHistory] =useState([Array(9).fill(null)])

    //3 To render the squares for the current move, you’ll want to read the last squares array from the history.
    // You don’t need useState for this—you already have enough information to calculate it during rendering:

    const currentSquares = history[history.length - 1];

    //4 Next, create a handlePlay function inside the Game component that will be called by the Board component to update the game. Pass xIsNext, currentSquares and handlePlay as props to the Board component:
    function handleplay(square){

    }


    return(
        <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} square={currentSquares} onPlay={handleplay}/>
            </div>
            <div className="game-info">
                <ol>
                    {/* {Todo} */}
                </ol>
            </div>
        </div>
    )
}