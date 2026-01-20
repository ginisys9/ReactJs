import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import MovieDetails from './pages/MovieDetails'

function App(){
  return(

  <Router>
   <Navbar/>
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/myMovies/:id' element={<MovieDetails/>}/>
    </Routes>
  </Router>
  )

  
}

export default App
