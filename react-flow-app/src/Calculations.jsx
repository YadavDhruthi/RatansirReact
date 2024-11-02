import { useRef } from "react";

function Calculations()
{
    const num1Ref=useRef(null);
  const num2Ref=useRef(null);
  const resRef=useRef(null);
  const handleAddition=(event)=>{
    const operation=event.target.value;
    const n1=parseFloat(num1Ref.current.value);
    const n2=parseFloat(num2Ref.current.value);
    resRef.current.value="";
    const operations={
      addition:()=>n1+n2,
      subtract:()=>n1-n2,
      mul:()=>n1*n2,
      div:()=>(n2!=0?n1/n2:"cannot divide by zero")

    }
    if(operation in operations)
    {
      resRef.current.value=operations[operation]();
    }
}
    return(
        <>
        <h2>Simple Calculator</h2>
      <label>Number1:</label>
      <input ref={num1Ref} type="number" placeholder='Enter first number'/><br></br>
      <label>Number2:</label>
      <input ref={num2Ref} type="number" placeholder="Enter second number"/><br></br>
      <select onChange={handleAddition}>
        <option value="">select</option>
        <option value="addition">Addition</option>
        <option value="subtract">Subtract</option>
        <option value="mul">Multiply</option>
        <option value="div">Division</option>   
      </select>
      <label>Calculate</label>
      <input ref={resRef} type="text" placeholder='Result' readOnly/>
        </>
    )
   
} 
export default Calculations;
  

