import { useState } from "react";

 function Toggle() {
    const [isVisible,setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={()=>setIsVisible(!isVisible)}>
        {isVisible ? 'hide':'show'} text
      </button>
      {isVisible && <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, quas.</p> }
    </div>
  )

}
export default Toggle;