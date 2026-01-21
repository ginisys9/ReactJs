import ProductList from "../component/ProductList"

function Home() {
  return (
     <div>
      
      <div className="container mt-4">
      <h1 className="mb-4">Shop Products</h1>
       <ProductList/>
    </div>

    </div>
  )
}

export default Home