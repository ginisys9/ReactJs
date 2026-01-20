import React from 'react'

const Child = React.memo(function({user}) {
    console.log('Child rendered');
    
  return (
    <div>
     <h1>userName : {user.name}</h1>
     <h1>age : {user.age}</h1>
     <h1>course : {user.course}</h1>
     <h1>rollNumber : {user.rollNumber}</h1>
    </div>
  )
})

export default Child