import React, {useEffect, useState} from 'react'
import Progressbar from './Progressbar'
import audio from "../audio/digital-alarm.m4a"
import ReactAudioPlayer from 'react-audio-player';

function Timer(){
    const pomoTime = 0.1
    const breakTime = 0.1
    const [time, setTime] = useState(pomoTime * 60)
    const [minutes , setMinutes] = useState(Math.floor(time/60))
    const [seconds , setSeconds] = useState(time % 60)
    const [isPaused,setPaused] = useState(true)
    const [isBreak,setBreak] = useState(true)
    const formatedMins = minutes < 10 ? `0${minutes}` : minutes
    const formatedSecs = seconds < 10 ? `0${seconds}` : seconds

    useEffect(()=>{
        const intervalId = setInterval(() => {  
            clearInterval(intervalId)
            updateTimer()
        }, 1000);
    },[time,isPaused])

    function updateTimer(){
        if(time < 0){
            if(isBreak){
                setBreak(false)
                setTime(breakTime * 60)
            }else{
                setBreak(true)
                setTime(pomoTime * 60)
            }
        }else if(!isPaused){
            setTime(time - 1)
            setMinutes(Math.floor(time/60))
            setSeconds(time % 60)
        }
    }

    return (
        <div>
        
            <Progressbar elapsedTime={time}/>

            {time < 0 &&  <ReactAudioPlayer
                src={audio}
                autoPlay={true}
            />}

            <div className="hero">
                <div className="notifications">
                    <h5 className={isPaused ? "paused paused-active" : "paused"}>Paused!</h5>
                    <h5 className={!isBreak ? "break break-active" : "break"}>Break!</h5>
                </div>
                <div className='timer'>
                    <h1>{`${formatedMins}:${formatedSecs}`}</h1>
                </div>
                <div className="actions">
                    <ion-icon class="icons" id="play"  onClick={()=>{setPaused(false)}} name="play-sharp"></ion-icon>
                    <ion-icon class="icons" id="pause" onClick={()=>{setPaused(true)}} name="pause-outline"></ion-icon>
                    <ion-icon class="icons" id="edit"  name="timer-outline"></ion-icon>
                </div>
            </div>
        </div>
    )
}
export default Timer