import { useEffect, useState } from "react";

function useTimer(seconds) {
  const [time, setTime] = useState(seconds);
  useEffect(() => {
    if(time === 0) return;
    const interval = setInterval(() => {
      setTime((pre) => pre - 1);
    }, 1000);
    return () => clearInterval(interval)
  }, [time]);
  return {time,resetTime:()=>setTime(seconds)}
}
export default useTimer;
