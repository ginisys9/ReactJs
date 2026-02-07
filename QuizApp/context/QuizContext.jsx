import { createContext,useReducer } from "react";
import question from '../data/q.json';
export const QuizContext = createContext();
const initialState = {
    username:"",
    index:0,
    score:0,
    completed:false,
    question
}
const quizReducer = (state,action) =>{
     console.log(action);
     
    switch(action.type){
        case "SET_NAME":
            return {
                ...state,
                username:action.payload
            }
        case "ANSWER":
            return{
                ...state,
                score:action.payload ? state.score+1:state.score,
                index:state.index +1
            }
         case 'FINISH':
            return {
                ...state,
                completed:true
            }
        case 'RESET':
            return{
                ...initialState,
                question:state.question
            }
        default: return state;
    }
}
const QuizProvider = ({children}) =>{
    const [state,dispatch] = useReducer(quizReducer,initialState);

  return (
    <QuizContext.Provider value={{state,dispatch}}>
        {children}
    </QuizContext.Provider>
  )
}
export default QuizProvider