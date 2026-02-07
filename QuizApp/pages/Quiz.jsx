import { useContext, useEffect } from "react"
import Progress from "../component/Progress"
import Questioncard from "../component/Questioncard"
import Timer from "../component/Timer"
import { QuizContext } from "../context/QuizContext"
import useTimer from "../hooks/useTimer"
import { useNavigate } from "react-router-dom"

function Quiz() {
  const { state, dispatch } = useContext(QuizContext);
  const { index, question } = state;
  const navigate = useNavigate();
  const { resetTime, time } = useTimer(15);
  if (!question || question.length === 0) {
    return <h2 className="text-center mt-5">Loading questions...</h2>
  }
  if (index >= question.length) {
    dispatch({ type: 'FINISH' })
    navigate('/result')
    return null;
  }
  useEffect(()=>{
    if (time===0) {
       dispatch({type:'ANSWER',payload:false})
       resetTime()
    }
  },[time])
  const current = question[index]
  const handleSubmit = (option) => {
    dispatch({ type: 'ANSWER', payload: option === current.answer })
    resetTime()
  }

  return (
    <div className="container mt-4">
      <Timer time={time} />
      <Progress current={index} total={question.length} />
      <Questioncard
        question={current.question}
        options={current.options}
        onSelect={handleSubmit}
      />
    </div>
  )
}

export default Quiz
