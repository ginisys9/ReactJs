import {useState,useEffect} from 'react'

function Post() {
    const [post,setPost] = useState([]);
    useEffect(function(){
        const fetchPost = async function(){
            var response = await fetch('https://jsonplaceholder.typicode.com/comments'),
            data = await response.json();
            setPost(data)
        }
        fetchPost()
    },[])
  return (
    <div>
     <h1>fetch data comments </h1>
     <ul>
        {post.map(data=>(
            <li key={data.id}>
                <h3>{data.name}</h3>
                <span>{data.email}</span>
                <p>{data.body}</p>
            </li>
        ))}
     </ul>
    </div>
  )
}

export default Post