import {useState} from 'react'

 function BasicValidate(){
    var [name,setName] = useState(''),
        [email,setEmail] = useState(''),
        [error,setError] = useState('');

        function handleSubmit(event){
           event.preventDefault();
           if (!name || !email){
               setError('Pease fill all the feilds')
           }else{
            setError("")
            console.log('Form submitted',{name,email});
            alert('Form submitted successfully');
           }
           }
        function nameChage(event){
            setName(event.target.value)
           }
       function emailChage(event){
                setEmail(event.target.value)
            }
  return(
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Basic validation Form</h2>
        <input type="text"
         placeholder='Enter Your Name'
         onChange={nameChage}
         />
        <br /> <br />
        <input
         type="email"
         placeholder='Enter Your Email' 
         onChange={emailChage}
         />
        <br /> <br />
        {error && <p style={{color:'red'}}>{error}</p> }
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
export default BasicValidate