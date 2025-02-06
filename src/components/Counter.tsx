import React, { useState } from 'react'
import Button from './Button'

const Counter = () => {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
        if(count <= 0) {
            setCount(0);
        } 
    };

    const reset = () => {
        setCount(0);
    }

  return (
    <div>
        <p>Count: {count}</p>
        <Button onClick={increment} label="+"/> 
        <Button onClick={decrement} label="-"/>
        <Button onClick={reset} label="Reset"/>
    </div>
  )
}

export default Counter