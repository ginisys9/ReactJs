import { Link } from "react-router-dom"
import { useEffect,useContext } from "react"
import {QuizContext} from '../context/QuizContext'
function Result() {
    const {state,dispatch} = useContext(QuizContext)
    const {username,score} = state;
    const percentage = Math.round((score/state.question.length) * 100);
    useEffect(function(){
        const allEntry = {
            name:username,
            score:score,
            percentage,
            date:new Date().toLocaleString()
        }
     var  stored = JSON.parse(localStorage.getItem('leader')) ||[],
     updateData = [...stored,allEntry];
     updateData.sort((a,b)=>b.score-a.score)
     localStorage.setItem('leader',JSON.stringify(updateData))
    },[])
    return (
      <div className="container text-center mt-5">
        <div className="card shadow p-5">
            <h2 className="fw-bold mb-3">🎉 Quiz Completed!</h2>
            <h4>{username} your score is:</h4>
            <h1 className="text-success">{score}</h1>
            <div className="d-flex justify-content-center gap-3 mt-4">
                <Link to="/leader" className="btn btn-primary">
                   View Leaderboard
                </Link>
                <Link to="/"
                 onClick={()=>dispatch({type:"RESET"})}
                className="btn btn-warning">
                    Home
                </Link>
            </div>
        </div>
    </div>
    )
}
export default Result
