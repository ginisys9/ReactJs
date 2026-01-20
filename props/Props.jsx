
function Props(prop){
  const {name='guest',age=18,address='rajabagicha',hobbies} = prop;
  return (
    <>
     <p>name:{name}</p>
     <p>Address:{age}</p>
     <p>age:{address}</p>
     <ul>
      {hobbies.map(function(value,index){
        return <li key={index}>{value}</li>
      })}
     </ul>
     <br/> 
    </>
  )
}
export default Props