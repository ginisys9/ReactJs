import useForm from "./hooks/useForm"

function Register() {
    const initialValue = {
        name:"",
        password:"",
        cpassword:'',
        email:"",
        number:""
    },
    onSubmit = function(value){
          console.log('Register form submit',value);
          
    }
    const { handleChanges,
        handleForm,
        resetForm,
        value } = useForm(initialValue,onSubmit)
    return (
        <div>
            <h1>Register form</h1>
            <form onSubmit={handleForm}>
                <label>Name:
                  <input type="text"
                name="name"
                placeholder="name"
                value={value.name}
                onChange={handleChanges}
                />
                </label>
                  <br /><br />
                  <label>Email:
                  <input type="email"
                name="email"
                placeholder="email"
                value={value.email}
                onChange={handleChanges}
                />
                </label>
                 <br /><br />
                <label>password:
                  <input type="password"
                name="password"
                placeholder="password"
                value={value.password}
                onChange={handleChanges}
                />
                </label>
                 <br /><br />
                <label>Confirm pass:
                  <input type="password"
                name="cpassword"
                placeholder="confirm password"
                value={value.cpassword}
                onChange={handleChanges}
                />
                </label>
                 <br /><br />
                <label>Number:
                  <input type="number"
                name="number"
                placeholder="number"
                value={value.number}
                onChange={handleChanges}
                />
                </label>
                  <br /><br />
             <button type="submit">Submit</button>
             <button onClick={resetForm}>Reset</button>
            </form>
        </div>
    )
}

export default Register