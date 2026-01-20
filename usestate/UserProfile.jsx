
import {useState} from 'react'

 function UserProfile() {
    var [name,setName] = useState('Guest'),
        [age,setAge] = useState(18);
  return (
    <div>
       <h2>Name:{name}</h2>
       <h1>Age:{age}</h1>
      <button  onClick={()=>setName('Mohd Intekhab')}>changeName</button>
      <button onClick={()=>setAge(age+1)}>changeAge</button>
    </div>
  )
}
export default UserProfile;