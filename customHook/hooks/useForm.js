import { useState } from "react";

export default function useForm(initialValue = {},callback){
   const [value,setValue] = useState(initialValue)
   /**
    * ! handling input feild
    */
   var handleChanges = function(e){
      const {name,value} = e.target;
      setValue(pre=>({
        ...pre,
        [name]:value
      }))
   },
   /**
    *  handling input feild
    */
   handleForm = function(e){
     e.preventDefault();
     if(callback) callback(value)
   },
   /**
    * ! reset form
    */
   resetForm = function(){
    setValue(initialValue)
   };
   return{
    handleChanges,
    handleForm,
    resetForm,
    value
   }
}