//memo is a high-order component (HOC) that memorizes the rendering of a functional component.
//It prevents a functional component from re-rendering if its props haven't changed.
//It's particularly useful when you havw components that are rendering with same props but don't need to update when those props change.

import { memo } from "react"
export const GenerateRandomNumber = memo(({ randomNumber, generateRandomNumber }) => {
    console.log("Generate Random Number Component Rendered");
    return (
        <>
        <h2>Random Number: {randomNumber}</h2>
        <button onClick={generateRandomNumber}>Generate Random Number</button> 
        </>
    )
})