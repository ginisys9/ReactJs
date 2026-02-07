import { useEffect, useState } from "react"

function LeaderBoard() {
    const [data,setData] = useState([])
    useEffect(function(){
        const stored = JSON.parse(localStorage.getItem('leader')) || [];
         setData(stored)
    },[])
    const clearBoard = () =>{
        localStorage.removeItem("leader")
        setData([])
    }
    return (
       <div className="container text-center py-5">
        <h2 className="fw-bold mb-4">🏆 Leaderboard</h2>
        
     {data.length === 0 ? (
        <p className="text-center mt-5">
            No score Yet! play the Quiz 
        </p>
     ):(
             <table className="table table-striped shadow">
            <thead className="table-dark">
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Score</th>
                    <th>Percentage</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {data.map((value,index)=>(
                 <tr key={index}>
                    <td>{index+1}</td>
                    <td>{value.name}</td>
                    <td>{value.score}</td>
                    <td>{value.percentage}%</td>
                    <td>{value.date}</td>
                </tr>
                ))}
            </tbody>
        </table>
     )}
        <button 
        className="btn btn-danger mt-3"
         onClick={clearBoard}
        >Clear Leaderboard</button>
    </div>
    )
}

export default LeaderBoard
