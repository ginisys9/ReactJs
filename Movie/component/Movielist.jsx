import Moviecard from "./Moviecard"


function Movielist({movies}) {    
    if (movies.length===0) {
      return <p> Movies are not found!</p>
    }
  return (
   	<div className="movie-list">
     {movies.map((movie)=>(
          <Moviecard
          key={(movie.imdbID)}
          myMovies={movie}
          />
     ))}
  </div>
  )
}

export default Movielist