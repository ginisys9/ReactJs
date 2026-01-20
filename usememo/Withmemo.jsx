import { useMemo, useState } from 'react'

function Withmemo() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');
    const expenseCal = function (num) {
        console.log('Running the calculation');
        let total = 0;
        for (let i = 0; i < 100000000; i++) {
            total += i
        }
        return total+num;
    }
    const result = useMemo(()=>expenseCal(count),[count])
    const increase = function(){
        setCount(count+1)
    }
    return (
        <div>
            <h2>Result:{result}</h2>
            <button onClick={increase}>IncreaseCount</button>
            <input type="text"
             value={text}
             onChange={(e)=>setText(e.target.value)}
            />
            <h1>count:{count}</h1>
        </div>
    )
}

export default Withmemo