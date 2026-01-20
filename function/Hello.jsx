
function Hello(){
//   function getName(yourName){
//      return yourName;
//   }
  const getName =(yourName)=>{
      return yourName
  }
  function handleClick(event){
     console.log(event);
     alert('button was clicked')
  }
  function handleInput(event){
   console.clear();
    console.log('value:',event.target.value);
  }
  function handleMouseOver(){
     console.log('button was clicked');
  }
  function daubleClick(){
      console.log('dauble button was clicked');
  }
   var name = 'Mohd Intekhab',
   name2 = 'Mohd Rizwan';
   return (
    <>
     <h1>Hellow:{getName(name)}</h1>
     <h1>Hellow:{getName(name2)}</h1>
     <button onClick={handleClick}>ClickMe!</button>
     <button onClick={()=> alert('hello from inline function')}>sayHellow</button>
     <button onClick={function(){
      window.alert('we are happy')
     }}>clickNow</button>
      <br/> <br />
      <input type="text" onChange={handleInput} placeholder="userName" />
      <br/> <br/>
      <p onMouseOver={handleMouseOver} onDoubleClick={daubleClick}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, error!
      </p>
    </>
  
   )
}
export default Hello;
