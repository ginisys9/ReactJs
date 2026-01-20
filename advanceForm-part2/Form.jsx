import { useForm} from "react-hook-form"
import { DevTool } from "@hookform/devtools";
import { useEffect } from "react";
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
 var {register,handleSubmit,control,formState,watch,getValues,setValue,reset,trigger} = useForm({
  defaultValues:async function() {
       var response = await fetch('https://jsonplaceholder.typicode.com/users/5'),
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
    {errors,isValid,isSubmitting,isSubmitted,isSubmitSuccessful,submitCount} = formState;
     console.log({isSubmitting,isSubmitted,isSubmitSuccessful,submitCount});
     
    const handleForm = function(e){
       console.log(e);
   },
   /**
    *  this will not re render the component
    */
   getValuesData = function(){
     var data = getValues();
      console.log(data);
      
   },
  
   
   /**
    * it is mainly used in the automatic otp 
    */ 
   setValuesData =async function(){
         var res = await fetch('https://jsonplaceholder.typicode.com/users/1'),
         noData = await res.json();
      setValue('name',noData.name,{
        shouldDirty:true,
        shouldValidate:true,
        shouldTouch:true
      })
   },
   onError = function(error){
        console.log('Error:',error);
          
   }

   /**
    * it will re render the component
    */
  // watchName = watch();
  //  useEffect(function(){
  //    console.log(watchName);
     
  //  },[watchName])
  useEffect(function(){
    if(isSubmitSuccessful){
      reset()
    }
  },[isSubmitSuccessful])
  
  return (
    <div>
 <form onSubmit={handleSubmit(handleForm,onError)}>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" {...register('email',{required:'Email is required',
         disabled:watch('name') ==="",
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
        },
       availableEmail: async function(value){
        var  response = await fetch(`https://jsonplaceholder.typicode.com/users/?email=${value}`),
        data = await response.json();
         return data.length === 0 || 'Email already exist'
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
     {errors.num && <p className="error">{errors.num?.message}</p>}
  </div>

<div className="mb-3">
<label htmlFor="country" className="form-label">Country</label>
<select className="form-select" id="country" {...register('country')}>
  <option>Open this select menu</option>
  <option value="india">india</option>
  <option value="pakistan">pakistan</option>
  <option value="japan">japan</option>
</select>
 {errors.country && <p className="error">{errors.country?.message}</p>}
</div>
 
<div className="mb-3 " >
  <label htmlFor="gender">Gender</label>
  <br /><br />
      <label htmlFor="gender">
         Male
           <input className="form-check-input" type="radio"
            value='male'
            {...register('gender',{required:'Gender is required'})}
           />
      </label>
      
      <label htmlFor="gender">
        Female
           <input className="form-check-input" type="radio"
           value='female'
            {...register('gender',{required:'Gender is required'})}
           />
      </label>

    {errors.gender && <p className="error">Gender is Required</p>}
</div>
<div className="mb-3 " >
  <label htmlFor="skills">skills</label>
  <br /><br />
      <label htmlFor="skills">
      
           <input className="form-check-input" type='checkbox'
            value='nodeJs'
            {...register('skills')}
           />   nodeJs
      </label>
      
      <label htmlFor="skills">
        
           <input className="form-check-input" type="checkbox"
           value='reactJs'
            {...register('skills')}
           /> reactJs
      </label>
      <label htmlFor="skills">
           <input className="form-check-input" type="checkbox"
           value='mongoDB'
            {...register('skills')}
           />  mongoDB
      </label>
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
  
  <div className="mb-3">
  <button type="submit"  className="btn btn-primary ">Submit</button>
  {/* <button type="submit" disabled={!isValid} className="btn btn-primary ">Submit</button> */}
    </div>  
  <button type="button" className="btn btn-primary" onClick={getValuesData}>clickMe!</button>
   <br /><br />
  <button type="button" className="btn btn-primary" onClick={setValuesData}>clickMe!</button>
  <br /><br />
    {/* <button type="button" className="btn btn-primary" onClick={()=>reset({
      name:'Mohd Intekahb',
      email:'hbintekhab@gmail.com'
    })}>Reset</button> */}
      <button type="button" className="btn btn-primary" onClick={()=>trigger()}>validate</button>
</form>
  <DevTool control={control} />
    </div>
  )
}

export default Form