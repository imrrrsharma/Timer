import React, { useEffect, useState } from 'react';
import './Timer.css'

const Timer = () =>{
    const [second, setSecond] = useState(0);
    const [minute, setMinute] = useState(0);

    var timer;

    useEffect(()=>{
        
        timer = setInterval(()=>{
            setSecond(second+1);
            if(second===59){
                setMinute(minute+1);
                setSecond(0);
            }
        }, 1000)

        return ()=>clearInterval(timer);
    });

    const restart = () =>{
        setSecond(0);
        setMinute(0);
    }

    const stop = () =>{
        clearInterval(timer);
    }

    const play= () =>{
        setSecond(second+1);
    }

    return(
        <div className='timer'>
        <div className='container'>
        <div className='timer_container'>
            <h1>Timer</h1>
            <h1>{minute<10?"0"+minute:minute}:{second<10?"0"+second:second}</h1>
            <button className='restart' onClick={restart}>Restart</button>
            <button className='stop' onClick={stop}>Stop</button>
            <button className='play' onClick={play}>Play</button>
        </div>
        </div>
            
        </div>
    );
}

export default Timer;