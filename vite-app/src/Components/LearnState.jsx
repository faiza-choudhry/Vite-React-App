import { useState } from "react"

export const LearnState = () => {
    const [num, setNum] = useState(5)       //for Number
    console.log("Number: ", num);
    const handleNum = () => {        //Set Number from 5 to 9
        setNum(9)
    }
    const [position, setPosition] = useState({ x: 1, y: 2 })   //for Position
    console.log("Position: ",position);
    const handlePosition = () => {
        setPosition({x:4, y:9})
    }
  return (
    <>
    <h1>Number {num}</h1>
    <button onClick={handleNum}>Change Number</button>
    <h1>Position: {position.x} {position.y}</h1>
    <button onClick={handlePosition}>Change Position</button>
    </>
  )
}


