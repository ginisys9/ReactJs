import { useState } from "react";
function Counter(){
 const [count,setCount]  = useState(0)
    
  const increase =() =>{
      setCount(count+1);
  }
  const decrease =() =>{
      setCount(count-1);
  }
  return (
    <>
    <h2>Count:{count}</h2>
     <div>
        <button onClick={increase}>Increase</button>
        <br/> <br/>
        <button onClick={decrease}>Increase</button>
     </div>
    </>
  )

}
export default Counter;