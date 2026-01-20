
import { useEffect, useRef, useState } from 'react'
import Movielist from '../component/Movielist'

function Home(){
 const [movies,setMovies] = useState([]);
 const [loading,setLoading] = useState(false)
 const inputRef =  useRef()
 const fetchMovies = async function(query){
    setLoading(true)
  const  result = await fetch(`http://www.omdbapi.com/?apikey=9f77b677&s=${query}`);
     const data = await result.json();
      console.log(data);
      setMovies(data.Search || [])
      setLoading(false)
 }
useEffect(function(){
    fetchMovies('Avenger')
},[])
const handleSubmit = function(e){
    e.preventDefault();
    const query = inputRef.current.value.trim();
    if(query) fetchMovies(query)
}
return (
<div className="home">

		<form onSubmit={handleSubmit}>
			<input className="searchInput" 
            ref={inputRef}
            placeholder="Search for a movie..."/>
			<button type="submit">Search 🔎</button>
		</form>
 {loading ? <p>Loading...</p> :  <Movielist movies = {movies}/> }

	
 </div>	

  )
}

export default Home