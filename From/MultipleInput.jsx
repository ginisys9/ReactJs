
import {useState} from 'react'

 function MultipleInput(){
   const [formData,setFormData] = useState({
     name:"",
     email:"",
     age:""
   })
   function formHandler(event){
        event.preventDefault()
        console.log(formData);  
   }
   
   function handleChange(event){
    const {name,value} = event.target;
     setFormData((pre)=>({
       ...pre,
       [name]:value
     }))
   }
  return (
    <div>
      <form onSubmit={formHandler}>
        <h2>Multiple Input Form</h2>
         <label>Name: </label>
        <input 
        type="text"
        name='name'
        placeholder='userName' 
        value={formData.name}
        onChange={handleChange}
        />
        <br />  <br />
        <label>Email: </label>
        <input 
        type="email" 
        name='email'
        placeholder='email' 
        value={formData.email}
        onChange={handleChange}
        />
        <br />  <br />
        <label>Age:</label>
        <input 

        type="number"
        name='age'
        placeholder='Age' 
        value={formData.age}
        onChange={handleChange}
        />
        <br />  <br />
        <button type='submit' >Submit</button>
      </form>
    </div>
  )
}
export default MultipleInput;
