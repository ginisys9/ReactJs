import React, { useMemo, useState } from 'react'
import Child from './Child';
function Parent() {
 var  [count,setCount] = useState(0),
      user = useMemo(()=>({
        name:'Mohd Intekhab',
        age:34,
        course:'btech',
        rollNumber:10

      }),[]);
  console.log('parent are loading...');
  
  return (
    <div>
     <h1>count:{count}</h1>
     <button onClick={()=>setCount(count+1)}>increment</button>
     <Child
      user={user}
     />
    </div>
  )
}

export default Parent