import { useReducer } from "react"

function Count() {
    function reducer(state,action){
        switch(action.type){
            case 'increment':
                return {count:state.count+1}
            case 'decrement':
                 return {count:state.count-1}
            case 'reset':
                  return {count:0}
           default:
            return state;
        }

    }
  const [state,dispatch] = useReducer(reducer,{count:0})
   
  return (
    <div>
        <h1>Count:{state.count}</h1>
        <button onClick={()=>dispatch({type:'increment'})}>+</button>
        <hr />
        <button onClick={()=>dispatch({type:'decrement'})}>-</button>
        <hr />
        <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
       
    </div>
  )
}

export default Count