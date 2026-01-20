import {useRef} from 'react'

 function Uncontrolled(){
  var nameRef =  useRef(),
      emailRef = useRef();
      
      function formHandler(event){
           event.preventDefault();
           console.log('Name:',nameRef.current.value);
           console.log('Email:',emailRef.current.value); 
    
      }

  return(
    <div>
      <form onSubmit={formHandler}>
    <h2>Uncontrolled Form</h2>
     <label>
       Name:
      <input type="text" ref={nameRef} placeholder='name'/>
     </label>
      <br /> <br />
     <label>
       Email:
      <input type="email" ref={emailRef} placeholder='email'/>
     </label>
      <br /><br />
      <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
export default Uncontrolled