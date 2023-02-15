import React from 'react'
import { useEffect, useState } from 'react';
import Confetti from 'react-confetti'

function TimerOne() {
   /* const current = new Date();
    const time = current.toLocaleTimeString("en-US");*/

    const [current, setCurrent] = useState(new Date());
    const time = current.toLocaleTimeString("en-US");

    useEffect(() => {                       
      const interval = setInterval(() => {  
        setCurrent(new Date());             
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
    

  const [toggle, setToggle] = useState(true)

  const [activate, setActivate] =useState(true)




  

  
  return (
    <div>
        {activate ? (               
        <div/>
      ) : (                   
        <Confetti tweenDuration="20" recycle="false" numberOfPieces="700"/>
      )}
            
        <p><b>made using:</b> useState, useEffect, ternary operators</p>

        <div  onClick={() => setActivate(!activate)} >
        {activate ? (               
        <button>Show Surprise</button>
      ) : (                   
        <button>Hide Surprise</button>
      )}
        </div>

        <div  onClick={() => setToggle(!toggle)} >
        {toggle ? (               
        <button>Hide</button>
      ) : (                   
        <button>Show</button>
      )}
        </div>
        {toggle ? (               
        <h1>{time}</h1>
      ) : (                   
      <div/>
      )}
    </div>
  )
}

export default TimerOne

