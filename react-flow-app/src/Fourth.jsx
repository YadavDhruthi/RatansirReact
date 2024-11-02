import { useState } from "react";

function Fourth()
{
    const[apple,setApple]=useState(0)
    return(
        <>
        <h1>no of apples:{apple}</h1>
        {apple===0?
            (
            <p>No apples left!</p>
        ):(
        <p>Great!you have some apples</p>
        )}
        <button onClick={()=>setApple(apple+1)}>Add 1 Apple</button>
        <button onClick={()=>apple>0&&setApple(apple-1)}>Remove 1 Apple</button>
        <button onClick={()=>setApple(0)}>Reset</button>
        </>
    )
}
export default Fourth;
