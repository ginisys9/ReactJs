import Productcard from "./Productcard"
const product = [
    {id:1,name:'laptop',price:500},
    {id:2,name:'keyboard',price:200},
    {id:3,name:'mouse',price:300},
    {id:4,name:'ups',price:900},
]

function ProductList() {
  return (
  <div className="row">
       {product.map((p)=>(
      <div className="col-md-3 mb-4" key={p.id}>
        <Productcard product={p}/>
        </div>
       ))}
    
  </div>
      
  )
}

export default ProductList