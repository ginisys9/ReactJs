import Props from "./Props"
import Btn from "./Btn";
function App() {
  const data = ['Web Development','HTML','CSS', 'JS','Node.js',"React","Banana", "Orange", "Apple", "Mango"];
 function message(event){
      console.log(event);
      const data = document.getElementById('name');
      const nodata = event.clientX ; 
      console.log(nodata);
         
 }
  return (
    <>
     <Props
      name='Mohd Intekhab'
      age = {23}
      address = 'hajipur gola'
      hobbies = {data}
     />
    <Btn
    label='ClickMe!'
    handleClick={message}
    />
    <h2 className="name"></h2>
    </>
  )
}

export default App
