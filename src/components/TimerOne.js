import React from 'react'
import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom'
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
    <div className=''>
        <p className='bottom-5 absolute mb-2 right-5 developer mt-10 italic font-normal mr-10'>Visit the:{" "}<Link to="/second-timer" className='underline text-gray-500 italic font-normal'>Class Component version</Link></p>

         {activate ? (               
        <div/>
      ) : (                   
        <Confetti tweenDuration="20" recycle="false" numberOfPieces="500"/>
      )} 
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
        
        {toggle ? (               
        <h1 className='text-5xl sm:text-7xl font-semibold text-gray-200'>{time}</h1>
      ) : (                   
      //<div className='flex justify-center -mb-10 -mt-32'><img src='https://s3.amazonaws.com/cartoonsmartstreaming/wp-content/uploads/2014/12/02202248/BlueBird.gif' alt='No Time Shown Gif'/></div>
      <div/>
      )}

    <p className=' text-gray-300'><b>Made using:</b> useState, useEffect, ternary operators</p>

    <div className='flex justify-center space-x-5'>
        <div className='border-blue-400 text-blue-400 border-2 w-40 py-1 mt-4 rounded-lg'  onClick={() => setActivate(!activate)} >
        {activate ? (               
        <button>Show Surprise</button>
      ) : (                   
        <button>Hide Surprise</button>
      )}
        </div>

        <div className='border-blue-400 text-blue-400 border-2 w-40 py-1 mt-4 rounded-lg'   onClick={() => setToggle(!toggle)} >
        {toggle ? (               
        <button>Hide Time</button>
      ) : (                   
        <button>Show Time</button>
      )}
        </div>
    </div>
        </div>
        <Outlet/>
    </div>
  )
}

export default TimerOne

