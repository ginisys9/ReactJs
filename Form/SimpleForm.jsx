
import {useState} from 'react'

 function SimpleForm() {
    var [name,setName] = useState(''),
        [email,setEmail]= useState('');
        function handleSubmit(event){
          event.preventDefault();
          console.log('Name:',name);
          console.log('Email:',email);
          
        }
        function inputChange(event){
           setName(event.target.value)
        }
        function emailChange(event){
            setEmail(event.target.value)
        }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <h2>React Hook Form</h2>
        <label>Name: </label>
        <input type="text" value={name}
         onChange={inputChange}
        />
        <br/> <br />
        <label>email: </label>
        <input type="email" value={email}
        onChange={emailChange}
        />
        <br/> <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
export default SimpleForm;