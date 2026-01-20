import {useState} from 'react'

 function Input(){
    const [name,setName] = useState('');
    function changeName(e){
       setName(e.target.value)
    }
  return (
    <div>
      <input type="text" value={name} onChange={changeName} />
      <p>Hellow: {name || 'Guest'}</p>
    </div>
  )
}
export default Input;