import { Controller, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import api from '../api/axios'
import { InputNumber } from "primereact/inputnumber"
import { InputText } from "primereact/inputtext"
import { Button } from "primereact/button"
import { useNavigate, useParams } from "react-router-dom"
import {userSchema} from '../validation/userSchema'
import { useEffect } from "react"

function EditList({toast}) {
    var   navigate = useNavigate(),
      {id} = useParams(),
     
      {register,handleSubmit,control,setValue,formState:{errors}} = useForm({resolver:yupResolver(userSchema)})
      const formSubmit = async (e)=>{
         if (id) {
             await api.put(`/user/${id}`,e)
             toast.current.show({ severity: 'success', summary: 'update', detail: 'user accepted successfullu', life: 2000 });
         }
         else{
               await api.post('/user',e)
               toast.current.show({ severity: 'success', summary: 'added', detail: 'user accepted successfullu', life: 2000 });
         }
         navigate('/')
      }
      useEffect(()=>{
        if (id) {
            api.get(`/user/${id}`).then((res)=>{
               const data = Object.keys(res.data)
                data.forEach((key)=>{
                    setValue(key,res.data[key])
                })
            })
        }
      },[id,setValue])
    return (
        <div>
           <h2>{id ? "Edit User" :"Add User"}</h2>
          <form className="p-fluid" onSubmit={handleSubmit(formSubmit)}>
            <div className="feild">
              <label>Name</label>
              <InputText {...register("name")}/>
              <p className="p-error">{errors.name?.message}</p>
            </div>
            <div className="feild">
              <label>username</label>
              <InputText {...register("username")}/>
              <p className="p-error">{errors.username?.message}</p>
            </div>
            <div className="feild">
              <label>Email</label>
              <InputText {...register("email")}/>
              <p className="p-error">{errors.email?.message}</p>
            </div>
            <div className="feild">
              <label>Age</label>
              <Controller
                 name="age"
                 control={control}
                 render={({field})=>(
                 <InputNumber
                  value={field.value}
                 onValueChange={(e)=> field.onChange(e.value)
                 }
                 className={errors.age ? "p-invalid":""}
               />
            )}
              />
             
              <p className="p-error">{errors.age?.message}</p>
            </div>
            <Button label="save" icon='pi pi-check'/>
          </form>
        </div>
    )
}

export default EditList
