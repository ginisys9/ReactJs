import {useState} from 'react'
 function AdvanceForm() {
    const [formData,setFormData] = useState({
        gender:'',
        country:'india',
        agree:false,
    })
    function formHandler(event){
       event.preventDefault();
       console.log(formData);
       
    }
    function handleChange(event){
        const {name,value,type,checked} = event.target
     setFormData((pre)=>({
         ...pre,
          [name]:type ==='checkbox' ? checked : value
     }))
    }
  return (
    <div>
      <h2>Form with checkBox, Radio & select</h2>
      <form onSubmit={formHandler}>
      <label>
        Male:
        <input 
         type="radio"
         name='gender' 
         value='male'
         checked={formData.gender ==='male'}
         onChange={handleChange}
         />
      </label>
      <br/>
      <label>
        female:
        <input 
        type="radio"
        name='gender'
        value='female'
        checked={formData.gender ==='female'}
        onChange={handleChange}
        />
      </label>
      <br/>
      <label>
        Country:
        <select name="country"
         onChange={handleChange}
         value={formData.country}
         >
            <option value="india">India</option>
            <option value="nepal">Nepal</option>
            <option value="srilanka">Srilanka</option>
            <option value="japan">Japan</option>
            <option value="pakistan">Pakistan</option>
            <option value="bhutan">Bhutan</option>
        </select>
      </label>
       <br />
        <label>
       <input 
       type='checkbox'
       name='agree'
       onChange={handleChange}
       checked={formData.agree}
       />
         I agree to term & condition
        </label>
        <br/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
export default AdvanceForm