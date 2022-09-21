import React, {useEffect, useState} from 'react'
import Progressbar from './Progressbar'
import audio from "../audio/timesUp.mp3"
import EidtInput from './EditFrom';
import useSound from 'use-sound';


/**
 * The Timer function is a React component that renders a timer, a progress bar, and a modal that
 * allows the user to change the timer's duration
 * @returns A functional component that returns a div with a progress bar, a timer, and an edit input.
 */

function Timer(){

    const [pomoTime , setPomoTime] = useState(0.1)
    const [breakTime , setBreakTime] = useState(.2)
    const [time, setTime] = useState(pomoTime * 60)
    const [countProgress, setProgress] = useState(0)
    const [minutes , setMinutes] = useState(Math.floor(time/60))
    const [seconds , setSeconds] = useState(time % 60)
    const [isPaused,setPaused] = useState(true)
    const [isBreak,setBreak] = useState(true)
    const [isEdit,setEdit] = useState(false)
    const formatedMins = minutes < 10 ? `0${minutes}` : minutes
    const formatedSecs = seconds < 10 ? `0${seconds}` : seconds
    const [ timesUp ] = useSound(audio, {
        volume: 1,
      })


/* A hook that is called every time the time or isPaused state changes. It is used to update the timer
and format the timer. */
    useEffect(()=>{
        const intervalId = setInterval(() => {  
            clearInterval(intervalId)
            updateTimer()
            formatTimer()
        }, 1000);
    },[time,isPaused])



    function formatTimer(){
        if(isBreak){
            if(  countProgress <= pomoTime * 60 ){
                setMinutes(Math.floor(time/60))
                setSeconds(time % 60)
            }
        }else{
            if(  countProgress <= breakTime * 60 ){
                setMinutes(Math.floor(time/60))
                setSeconds(time % 60)
            }
        }
    }

    function updateTimer(){
        if(time < 0){
            timesUp()
            if(isBreak){
                setBreak(false)
                setProgress(0)
                setTime(breakTime * 60)
            }else{
                setBreak(true)
                setProgress(0)
                setTime(pomoTime * 60)
            }
        }
        else if(!isPaused){
            setProgress(countProgress + 1)
            setTime(time - 1)
        }
    }

    // Takes values entered by user for Work time and Break Time. resets timer to the user preferred time
    function resetToPreferredTime(v1,v2){
        if(isBreak){
            setTime(v1 * 60)
            setProgress(0)
            setPomoTime(v1)
            setBreakTime(v2)
        }else{
            setTime(v2 * 60)
            setProgress(0)
            setPomoTime(v1)
            setBreakTime(v2)
        }
    }
    
    function handleInput(){
        setEdit((prevValue)=>(!prevValue))
        setPaused(isEdit ? false : true)
    }
    
    function handleSubmit(e,numTime, numBreak){
        e.preventDefault()
        resetToPreferredTime(numTime,numBreak)
        setPaused(false)
        setEdit(false)
    }

  /**
   * It changes the title of the page to the current time and whether it is a break or work time.
   */
    function handleTitle(){
        document.title = `${formatedMins}:${formatedSecs} | ${!isBreak ? "break" : "work"}`
    }


    function handleSkip(){
        // console.log("im in handleSkip",time)
        // const intervalId = setInterval(() => {  
        //     clearInterval(intervalId)
        //     if(isBreak){
        //         setBreak(false)
        //         setProgress(0)
        //         setTime(breakTime * 60)
        //     }else{
        //         setBreak(true)
        //         setProgress(0)
        //         setTime(pomoTime * 60)
        //     }
        // }, 3000);
    }
    

    return (
        <div className='main'>
            {handleTitle()}
            <Progressbar 
                maxCompleted={isBreak ? pomoTime * 60 + 1 : breakTime * 60}
                maxBreakCompleted={breakTime * 60}
                currCompleted={countProgress}
            />
            {/* {time < 0 &&  <ReactAudioPlayer
                src={audio}
                autoPlay={true}
            />} */}

            <div className="hero">
                <div className="notifications">
                    <h5 className={isPaused ? "paused paused-active" : "paused"}>Paused!</h5>
                    <h5 className={!isBreak ? "break break-active" : "break"}>Break!</h5>
                </div>
                <div>
                    <h1>{`${formatedMins}:${formatedSecs}`}</h1>
                </div>
                <div className="actions">
                    <ion-icon class="icons" id="play"  onClick={()=>{
                        setEdit(false)
                        setPaused(false)
                    }} name="play-sharp"></ion-icon>
                    <ion-icon class="icons" id="pause" onClick={()=>{setPaused(true)}} name="pause-outline"></ion-icon>
                    <ion-icon class="icons" id="skip" onClick={()=>{handleSkip()}} name="play-skip-forward"></ion-icon>
                    <ion-icon class="icons" id="edit"  onClick={()=>{handleInput()}} name="timer-outline"></ion-icon>
                </div>
            <EidtInput onSubmit={handleSubmit} toggle={isEdit}/>
            </div>

        </div>
    )
}
export default Timer