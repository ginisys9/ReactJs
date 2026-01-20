import React, { useLayoutEffect, useRef  } from 'react'

function Example2() {
   var  boxRef = useRef(null);
   useLayoutEffect(function(){
        var ele = boxRef.current,
           width =  ele.offsetWidth;
           ele.style.transform = `translate(${width}px)`
   },[])
  return (
  
        <div ref={boxRef} style={
        {
       background:'lightblue',
       padding:'30px',
        transition:'4s'
        }}>
      Animated box
        </div>
    
  )
}

export default Example2