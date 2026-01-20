import  { useLayoutEffect, useRef } from 'react'

function Chat() {
    var chatRef = useRef(null);
    useLayoutEffect(function(){
      chatRef.current.scrollTop = chatRef.current.scrollHeight
    },[])
    return (
        <div ref={chatRef} style={
            {
                height: '100px',
                padding: '30px',
                border: '1px solid #ccc',
                overflow: 'scroll'
            }}>
           <p>hiii</p>
           <p>Helloe</p>
           <p>How are you..</p>
           <p>I am fine</p>
           <p>how your life is gone</p>
           <p>my life are just destroyed</p>
           <p>dont worry</p>
           <p>shotly i will connect you</p>
           <p>where are you going</p>
           <p>i have some urgent work</p>
        </div>
    )
}
export default Chat