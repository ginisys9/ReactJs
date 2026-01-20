import useFetch from "./hooks/useFetch"
function User(){
    const {data,error,loading} = useFetch('https://jsonplaceholder.typicode.com/users')
   if(error) return <h2>Error are occured...</h2>
   if(loading) return <h2>Loading...</h2>
  return (
    <div>
     <ul>
     {data.map(user=>(
      <li key={user.id}>
        {user.name} 
      </li>
     
     ))}
     </ul>
    </div>
  )
}

export default User