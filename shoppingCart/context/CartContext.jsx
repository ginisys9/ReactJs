import { createContext, useContext, useState } from "react";
const CartContext = createContext()
function CartProvider({children}){
   var  [cart,setCart] = useState([]),
    addToCart = function(value){
      setCart((pre)=>{
         var existItem = pre.find((item)=>item.id ===value.id)
         if(existItem){
         return pre.map((item)=>item.id ===value.id ?{...item,qty:item.qty}:item)
         }
       return [...pre,{...value,qty:1}]
      })
   },
   /**
    *  removeFromCart
    */
   removeFromCart = function(id){
     setCart((pre)=>pre.filter((item)=>item.id !==id))
   },
   /**
    *  updateQuantity
    */
   updateQty = function(id,qty){
      setCart((pre)=>pre.map((item)=>(item.id === id ? {...item,qty}:item)))
   },
  /**
   *  total price item
   */
   total = cart.reduce((sum,item)=> sum + item.price*item.qty,0);

   return (
        <CartContext.Provider value={{cart,updateQty,addToCart,removeFromCart,total}}>
           {children}
        </CartContext.Provider>
   )
}
export default CartProvider;
/**
 * custom hook
 */
export const useCart = () => useContext(CartContext)