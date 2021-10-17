import React from "react";
import Square,{gridGenerator} from "./Square";
const  Board =()=>{
    const squares = gridGenerator(Square);
    return <div className="board-grid">{squares}</div>

}
export default Board;