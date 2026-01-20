import React, { useLayoutEffect, useRef, useState } from 'react'

function Example1() {
   var  boxRef = useRef(null),
 [height,setHeight] = useState(0);
  useLayoutEffect(function(){
    setHeight(boxRef.current.clientHeight)
  },[])
  return (
    <div>
        <div ref={boxRef} style={
        {
       width:'300px',
       padding:'30px',
       background:'red'   
        }}>
         hellow world measure Me!
        </div>
        <h3>Height:{height}</h3>
    </div>
  )
}

export default Example1