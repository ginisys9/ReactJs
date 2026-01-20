
import {useState} from 'react'

 function Liked() {
    const [liked,setLiked] = useState(false);
  return (
    <div>
      <button onClick={()=> setLiked(!liked)}>
        {liked ? '❤ liked':'💙 liked'}
      </button>
    </div>
  )
}
export default Liked;