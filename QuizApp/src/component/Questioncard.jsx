

function Questioncard(props){
    const { question,options,onSelect} = props;
    return (
       <div className="card shadow p-4">
            <h4 className="fw-semibold">{question}</h4>
            <div className="mt-3">
                {options.map((opt,id)=>(
                <button className="btn btn-outline-primary w-100 mt-2"
                 key={id}
                 onClick={()=>onSelect(opt)}
                >{opt}</button>
                ))}
            </div>
        </div>
    )
}

export default Questioncard
