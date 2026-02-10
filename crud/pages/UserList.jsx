import { useEffect, useState } from "react"
import api from '../api/axios'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import { confirmDialog } from "primereact/confirmdialog";

function UserList({toast}) {
    const [users, setUser] = useState([]);
    const navigate = useNavigate()
    const fetchUser = async () => {
        const res = await api.get('/user')
        setUser(res.data)
    }
    useEffect(function () {
        fetchUser()
    }, [])
     const  onHandle  = function(){
         navigate('/add')
     }
     const deleteUser =(id)=>{
        console.log(id); 
        confirmDialog({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            accept: async ()=>{
                await api.delete(`/user/${id}`)
                  toast.current.show({ severity: 'success', summary: 'Deleted', detail: 'user deleted successfullu', life: 2000 });
               fetchUser()
            },
       
          
        });
     }
     const buttonTemplate = (id) =>(
           <>
            <Button  icon="pi pi-pencil" className="p-button-sm p-button-warning mr-2" onClick={()=>navigate(`/edit/${id.id}`)}/>
            <Button  icon="pi pi-trash" 
            onClick={()=>deleteUser(id.id)}
            className="p-button-sm p-button-danger mr-2"/>
           </>
     );
    return (
        <div className="p-4">
          <div className="flex justify-content-end">
            <Button label="Add user" onClick={onHandle} icon="pi pi-plus" size="small"/>
          </div>
            <DataTable value={users} 
            stripedRows
            paginator rows={5} 
            filterDisplay="row"
            size="small"
            tableStyle={{ minWidth: '50rem' }}>

        <Column 
        field="name"
        filter
        sortable
        filterPlaceholder="Search by name"
        header="Name"></Column>
        <Column 
        field="username"
        filter
        sortable
        filterPlaceholder="Search" 
        header="Userame"></Column>
        <Column 
        field="email"
        filter 
        sortable
        filterPlaceholder="Search by name"
        header="Email"></Column>
        <Column 
        field="age"
        filter 
        sortable
        filterPlaceholder="Search by name"
        header="Age"></Column>
        <Column  header="Actions" body={buttonTemplate} style={{width:'13%'}}></Column>
      </DataTable>
        </div>
    )
}
export default UserList
