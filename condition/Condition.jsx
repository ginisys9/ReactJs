import './App.css'
function Condition(){
  var isLoggedIn = true,
  visible = true,
  noVisiblity = visible?'visible':'isvisible';
   return (
    <>
    {isLoggedIn?<h2>welcome user!</h2>:<h2>please loggIn!</h2>}
    {isLoggedIn || <h2>welcome user!</h2>}

    <p className={noVisiblity}>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, soluta.</p>
    </>
   )






   
   //   var isLoggedIn = true,
   //     message;
   //   if (isLoggedIn){
   //      message= <h2>welcome user!</h2>
   //   }
   //   else{
   //      message = <h2>please loggIn!</h2>
   //   }
   //   return <div> {message} </div>
}
export default Condition;