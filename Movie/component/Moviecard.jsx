import { Link } from "react-router-dom"

function Moviecard({myMovies}){

  return (
   <div className="movie-card">
		<img alt={myMovies.Title} src={myMovies.Poster}/>
		<h3>{myMovies.Title}</h3>
		<p>{myMovies.Year}</p>
		<Link to={`/myMovies/${myMovies.imdbID}`}>Details</Link>
	</div>
  )
}

export default Moviecard