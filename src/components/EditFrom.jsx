import React, { useState } from 'react'
// import { useTransition, animated } from 'react-spring'


export default function EidtInput(props) {
  const [numTime, setNumTime]= useState(1)
  const [numBreak, setNumBreak]= useState(1)

  return (
    <div className={props.toggle ? "editInput editInput-active" : "editInput"}>
      <form>
        <input type={"Number"} placeholder='Timer' min={1} onChange={(e)=>{setNumTime(e.target.value)}} className="input"/>
        <input type={"Number"} placeholder='Break' min={1} onChange={(e)=>{setNumBreak(e.target.value)}} className="input"/>
        <button className='input submitBtn' type='submit' onClick={(e)=>{props.onSubmit(e,numTime,numBreak)}}>Submit</button>        
      </form>
    </div>
  )
}
