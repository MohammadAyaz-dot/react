import { useState } from "react"
import Board from "./Board"

// 1 write a new top-level component called Game to display a list of past moves. 
export default function Game(){
    
    // we dont need xIsNext variable as state anymore
    // const[xIsNext, setXIsNext] =useState(true)
  
    //2 Notice how [Array(9).fill(null)] is an array with a single item, which itself is an array of 9 nulls.
    const[history,setHistory] =useState([Array(9).fill(null)])



    //6 Before you can implement jumpTo, you need the Game component to keep track of which step the user is currently viewing. To do this, define a new state variable called currentMove, defaulting to 0:
    const [currentMove, setCurrentMove] = useState(0);

    const xIsNext = currentMove % 2 === 0;
        //3 To render the squares for the current move, you’ll want to read the last squares array from the history.
    // You don’t need useState for this—you already have enough information to calculate it during rendering:
    
    // const currentSquares = history[history.length - 1];
                  // MODIFY currentSquare
    // Finally, you will modify the Game component to render the currently selected move, instead of always rendering the final move:
      const currentSquares = history[currentMove];

    //4 Next, create a handlePlay function inside the Game component that will be called by the Board component to update the game. Pass xIsNext, currentSquares and handlePlay as props to the Board component:
    function handleplay(nextSquares){
        const nextHistory=([...history.slice(0,currentMove+1), nextSquares]);

        setHistory(nextHistory)
        setCurrentMove(nextHistory.length-1)
        // setXIsNext(!xIsNext);
    }

    //7 Next, update the jumpTo function inside Game to update that currentMove. You’ll also set xIsNext to true if the number that you’re changing currentMove to is even.
    function jumpTo(nextMove){
        setCurrentMove(nextMove);
        setXIsNext(nextMove % 2 === 0);
    }

    // 5
    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
          description = 'Go to move #' + move;
        } else {
          description = 'Go to game start';
        }
        return (
          <li key={move}>
            <button onClick={() => jumpTo(move)}>{description}</button>
          </li>
        );
      });


    return(
        <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} square={currentSquares} onPlay={handleplay}/>
            </div>
            <div className="game-info">
                <ol>
                    {moves}
                </ol>
            </div>
        </div>
    )
}