import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

function MovieDetails(){
    const {id} = useParams();
    const [movies,setMovies] = useState(null)
   const getMovies = async function(){
         const  result = await fetch(`http://www.omdbapi.com/?apikey=9f77b677&i=${id}`);
      const data = await result.json();
      console.log(data);
      
      setMovies(data)
    }
   useEffect(function(){
     getMovies()
   },[id])
   if(!movies) return <p>Loading...</p>
  return (
 	<div className="movie-detail">
		<h2>{movies.Title}</h2>
		<img alt={movies.Title} src={movies.Poster}/>
		<p><strong>Genre : </strong>{movies.Genre}</p>
		<p><strong>Released:</strong>{movies.Released}</p>
		<p><strong>Plot:</strong>
        {movies.Plot}
        </p>
	</div>
  )
  }


export default MovieDetails