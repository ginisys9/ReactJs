import Condition from "./Condition";
import Hellow from "./Hellow";
function App() {
 var  isLogged = false;
   return  (
   <>
   {isLogged ? <Condition/> : <Hellow/>}
   </>
   ) 
}
export default App;
