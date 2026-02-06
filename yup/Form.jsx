import { useForm } from "react-hook-form"
import {registerSchema} from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
function Form() {     
   const {register,handleSubmit,formState:{errors}} = useForm({
    resolver:yupResolver(registerSchema)
   });
   const formSubmit =(e)=>{
      console.log(e);
      
   }
  return(
    <div>
    <form onSubmit={handleSubmit(formSubmit)}>
  <div className="mb-3">
    <label  className="form-label">Name</label>
    <input type="text"
     {...register('name')}
    className="form-control" />
    <p className="errors">{errors.name?.message}</p>
  </div>
  <div className="mb-3">
    <label  className="form-label">Email address</label>
    <input type="email"
       {...register('email')}
    className="form-control" />
     <p className="errors">{errors.email?.message}</p>
  </div>
  <div className="mb-3">
    <label  className="form-label">Password</label>
    <input type="password" className="form-control" 
       {...register('password')}
    id="password" />
     <p className="errors">{errors.password?.message}</p>
  </div>

  <div className="mb-3">
    <label  className="form-label">confirm password</label>
    <input type="password" className="form-control" 
       {...register('confirmPaas')}
    id="password" />
     <p className="errors">{errors.confirmPaas?.message}</p>
  </div>
  <div className="mb-3">
    <label  className="form-label">Age</label>
    <input type="number" className="form-control" 
       {...register('age')}
    id="password" />
     <p className="errors">{errors.age?.message}</p>
  </div>
  <div className="form-check">
     <label>
       skills:
  </label>
  <input type="checkbox" {...register("skills")} value="React"/>React
  <input type="checkbox" {...register("skills")} value="Nodejs"/>Nodejs
  <input type="checkbox" {...register("skills")} value="php"/>php
  <input type="checkbox" {...register("skills")} value="Ruby"/>Ruby
  <input type="checkbox" {...register("skills")} value="mongodb"/>mongodb
 <p>{errors.skills?.message}</p>
</div>


  <button type="submit" className="btn btn-primary">Submit</button>
 </form>
    </div>
  )
}
export default Form
