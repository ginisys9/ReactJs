import { useForm} from "react-hook-form"
import { DevTool } from "@hookform/devtools";
function Form(){
//  var {register,handleSubmit,control,formState} = useForm({
//   defaultValues:{
//     name:'Mohd Intekhab',
//     email:'hbintekhab@gmail.com',
//     num:23,
//     address:{
//         street:"",
//         city:""
//     }
//   }
//  }),
 var {register,handleSubmit,control,formState} = useForm({
  defaultValues:async function() {
       var response = await fetch('https://jsonplaceholder.typicode.com/users/1'),
       data = await response.json();
       return{
          name:data.name,
          email:data.email,
          num:23,
           address:{
             street:data.address.street,
             city:data.address.city,
             geo:{
              lat:data.address.geo.lat
             }
           },
           phoneNumber:['85856858','8458383854'],
           dob: new Date()
       }
  }
 }),
    {errors} = formState;
    const handleForm = function(e){
       console.log(e);
   }
  return (
    <div>
 <form onSubmit={handleSubmit(handleForm)}>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" {...register('email',{required:'Email is required',
         pattern:{
            value:/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
            message:'Invalid email address'
         },
        //  validate:function(value){
        //   return(
        //     value!=='admin@example.com' || 'Enter diffrent email'
        //   )
        //  }
        validate:{
          notAdminEmail:function(value){
            return(
              value !=='admin@example.com' ||'Enter diffrent email'
            )
          },
        notBlacklistEmail:function(value){
          return(
            !value.endsWith('@blacklisted.com') ||'this domian is not allowed'
          )
        }
        }
    })}/>
  {errors.email && <p className="error">{errors.email?.message}</p>}  
  </div>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">userName</label>
    <input type="text" className="form-control" id="name"{...register('name',{required:'Name is required'})}/>
    {errors.name &&  <p className="error">{errors.name?.message}</p>} 
  </div>

  <div className="mb-3">
    <label htmlFor="num" className="form-label">Age</label>
    <input type="number" className="form-control" id="num" {...register('num',{required:'Number is required',
        valueAsNumber:true,
        min:{
            value:18,
            message:'Age must be at least 18'
        },
        max:{
             value:25,
            message:'Age must be at most 25'
        }
    })}/>
     {errors.num &&   <p className="error">{errors.num?.message}</p>}
  </div>
    <div className="mb-3">
    <label htmlFor="street" className="form-label">street</label>
    <input type="text" className="form-control" id="street"{...register('address.street',{required:'street is required'})}/>
  </div>

  <div className="mb-3">
    <label htmlFor="city" className="form-label">city</label>
    <input type="text" className="form-control" id="city"{...register('address.city',{required:'city is required'})}/>
  </div>

  <div className="mb-3">
    <label htmlFor="lat" className="form-label">latitude</label>
    <input type="text" className="form-control" id="lat"{...register('address.geo.lat',{required:'latitude is required'})}/>
  </div>
  <div className="mb-3">
    <label htmlFor="pNum" className="form-label">primaryNumber</label>
    <input type="number" className="form-control" id="pNum"{...register('phoneNumber.0',{required:'primaryNumber is required'})}/>
  </div>

  <div className="mb-3">
    <label htmlFor="sNum" className="form-label">secondryNumber</label>
    <input type="number" className="form-control" id="sNum"{...register('phoneNumber.1',{required:'secondryNumber is required'})}/>
  </div>
  <div className="mb-3">
    <label htmlFor="dob" className="form-label">date of birth</label>
    <input type="date" className="form-control" id="dob"{...register('dob',{required:'dob is required',valueAsDate:true})}/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>

</form>
  <DevTool control={control} />
    </div>
  )
}

export default Form