import { useState } from "react"
import Square from "./Square"

const SquareBox = () => {
    const [squares, setSquares] = useState(Array(9).fill())
    const [xIsNext, setXIsNext] = useState(true);

    const handleClick = (i) => {
        if (squares[i] || solution(squares)) {
            return;
        }
        const nextSquare = squares.slice();
        if (xIsNext) {
            nextSquare[i] = "X";
        } else {
            nextSquare[i] = "O";
        }
        setSquares(nextSquare);
        setXIsNext(!xIsNext);
    }

    const winner = solution(squares);
    let status;
    if (winner) {
        status = "Winner for this match: " + winner;
    } else {
        status = "Next player: " + ((xIsNext) ? "X" : "O");
    }

    function solution() {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a]
            };
        }
    }

    return (
        <>
            <div className="flex flex-col w-full items-center mt-32">
                <div className="text-xl font-semibold">{status}</div>
                <br />
                <div className="flex">
                    <div>
                        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
                    </div>
                    <div>
                        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
                    </div>
                    <div>
                        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SquareBox