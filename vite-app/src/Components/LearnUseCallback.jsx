//This is used when you have a call back which you are passing as a prop to your child then We use this so that if this memoise call back remains then it remains stable across the re-renders. 

import { useState, useCallback } from 'react';
import { GenerateRandomNumber } from './GenerateRandomNumber';
export const LearnUseCallback = () => {
    const [count, setCount] = useState(0)
    const handleIncreaseCount = () => {
        setCount((prevCount) => prevCount +1 )
    }
    const [randomNumber, setRandomNumber] = useState(0);
    // const generateRandomNumber = () => {
    //     const newRandomNumber = Math.floor(Math.random() * 100) + 1;   //Generate Random Number btw 1 and 100
    //     setRandomNumber(newRandomNumber);
    // };
    
    const generateRandomNumber = useCallback(() => {
      const newRandomNumber = Math.floor(Math.random() * 100) + 1;
      setRandomNumber(newRandomNumber);
    }, [randomNumber])
  return (
    <>
    <GenerateRandomNumber randomNumber={randomNumber} generateRandomNumber={generateRandomNumber}/>
    <h1>Count: {count}</h1>
    <button onClick={handleIncreaseCount}>Increase Count</button> 
    </>
  )
}
