import { lazy, Suspense, useState } from "react"
// import Post from "./Post"
const Post = lazy(()=>import('./Post'))
function App(){
  const [showPost,setShowPost] = useState(false)
  return (
    <>
    <button onClick={(e)=>setShowPost(true)}>show post</button>
     {showPost &&
       (
        <Suspense fallback={<p>loading post...</p>}>
          <Post/>
        </Suspense>
       )
     
     }
    </>
  )
}

export default App
