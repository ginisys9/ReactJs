import useForm from './hooks/useForm'
function Login() {
    var initialValue = {
        email:'',
        password:''
    },
    onSubmit = function(value){
      console.log('form submit',value);
      
    };
const { handleChanges,
        handleForm,
        resetForm,
        value} = useForm(initialValue,onSubmit)
  return (
    <div>
     <form onSubmit={handleForm}>
        <h2>Login Form</h2>
        <input type="email"
          name='email'
          placeholder='email'
          value={value.email}
          onChange={handleChanges}
        />
         <br /><br />
        <input type="password"
          name='password'
          placeholder='password'
          value={value.password}
          onChange={handleChanges}
        />
        <br /><br />
        <button type='submit'>Submit</button>
        <button onClick={resetForm}>Reset</button>
     </form>
    </div>
  )
}

export default Login