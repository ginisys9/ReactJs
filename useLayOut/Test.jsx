import React, { useEffect, useLayoutEffect } from 'react'

function Test() {
    useEffect(function(){
        console.log('this is useEffect');
        
    },[])
   
    useLayoutEffect(function(){
      console.log('this is useEffectLayout');
    },[])
  return (
    <div>
        <h2>this is useEffectLayout</h2>
    </div>
  )
}

export default Test