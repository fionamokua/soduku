import React from "react";
import "./square.css";
const Square = () => {
  const cells = gridGenerator(Cell);
  return <div  className="grid square-border"  >{cells}</div>;
};

export default Square;

const Cell = ({number}) => {
  return <div className="square pink grid-item">{number}</div>;
};

export function gridGenerator(Cmp,isCell=false) {
  const cells = [];
  if(isCell){
    //initialise each cell with a random number and pass as props
    //make a random set of numbers between 1 to 9 and pass them 
    //select random number of cells 
    //select random cells
    

  }else {
    makeGrid()
  }
    return cells;
    
      function makeGrid(props) {
        for (let i = 0; i < 9; i++) {
          cells.push(<Cmp {...props} />);
        }
      }
  }







