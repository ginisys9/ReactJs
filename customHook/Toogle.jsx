
import useToggle from './hooks/useToggle'
function Toogle(){
    var [isOpen,toggleOpen] = useToggle(),
        [isTest,toggleTest] = useToggle()

  return (
    <div>
      <div>
        <button
         onClick={toggleOpen}
        >Toggle</button>
        {isOpen && <p>Hellow,this is visible</p>}
    </div>
    <br />
      <div>
        <button
         onClick={toggleTest}
        >Toggle</button>
        {isTest && <p>Hellow,my name is Mohd Intekahb</p>}
    </div>

    </div>
   
  )
}

export default Toogle