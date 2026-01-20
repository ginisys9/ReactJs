import {useState} from 'react'

 function Student() {
    const [name,setName] = useState({
        name:'Mohd Rizwan',
        grade:'A',
        city:'delhi',
        pinCode:824125
    })
    function changeCity(){
        setName({...name,city:'Mumbai',pinCode:673673})
    }
  return (
    <div>
      <h1>Name:{name.name}</h1>
      <h2>Name:{name.grade}</h2>
      <p>City:{name.city}</p>
      <p>pinCode:{name.pinCode}</p>
      <button onClick={changeCity}>changeDetail</button>
    </div>
  )
}
export default Student;