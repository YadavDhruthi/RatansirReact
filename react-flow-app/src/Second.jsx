import { useState } from "react";

function Second()
{
    const [count,setCount]=useState(0)
    const handleClick=()=>{
        setCount(count+1);
    }
    const handleClickDecrement=()=>{
        setCount(count-1);
    }
    return(
        <>
        <h1>This is counter value:{count}</h1>
        <button style={{color:'blue'}}onClick={handleClick}>Increment</button>
        <button style={{color:'green'}}onClick={handleClickDecrement}>Decremement</button>
        </>
    )
}
export default Second;
