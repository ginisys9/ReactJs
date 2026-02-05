import { useState } from 'react';
import Select from  'react-select';
import AsyncSelect from 'react-select/async';
import CreateSelect from 'react-select/creatable'

function App() {
 const [fruits,setFruits] = useState(null)
  const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const customStyle = {
   /**
     * it will be used outside the box
    */
   control:(e)=>({
     ...e,
     borderColor:'red',
     borderRadius:'30px',
   }),
  /**
   *  it will be used in the select box
   */
  option:function(e){
     return {
      ...e,
       fontSize:'15px',
       color:'red'
     }
  },
  /**
   *   for the single value
   */
  singleValue:function(e){
     return {
      ...e,
      color:"black",
      fontSize:'30px'
     }
  }
}

  return (
    <div style={{width:'300px'}}>
       <CreateSelect  options={options} 
        // value={fruits} 
         onChange={(select)=>console.log(select)}
        //  onChange={setFruits}
        isMulti
         placeholder="select your fruits"
        //  isClearable
        //  isDisabled
        /** for default value */
        // defaultValue={option[1]}
        /** to close the search */
        // isSearchable={false}
         styles={customStyle}
       />
       {/* <p>{fruits?.label}</p> */}
       <br />
       <AsyncSelect
        loadOptions={(input)=>{
          fetch(`https://jsonplaceholder.typicode.com/users?username=${input}`)
          .then((res)=>res.json())
          .then(data => data.map((user)=>({
                label:user.name,
                 value:user.id
          })))
          }
        }
       />
    </div>
  )
}

export default App

// data.map((user)=>({
//                label:user.name,
//                value:user.id
//           }))