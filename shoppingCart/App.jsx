import CartProvider from "./context/CartContext"
import CartPage from "./pages/CartPage"
import Home from "./pages/Home"
import Navbar from "./pages/Navbar"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"

function App() {
  return (
  <CartProvider>
     <Router>
    <Navbar/>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<CartPage/>}/>
     </Routes>
     </Router>
 </CartProvider>
  )
}

export default App
