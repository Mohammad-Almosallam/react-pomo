import React, { useState } from 'react'
// import { useTransition, animated } from 'react-spring'


export default function EidtInput(props) {
  const [numTime, setNumTime]= useState()
  const [numBreak, setNumBreak]= useState()

  function handleZeroValue(value){
      if(value <= 0 && value !== ''){
        alert("Value should be greater than 0")
        setNumBreak(1)
        setNumTime(1)
      }
    return 
  }

  function handleSubmit(e){
    if(numBreak === undefined || numTime === undefined){
      alert('Please fill input with numbers')
      return
    }else{
      props.onSubmit(e,numTime,numBreak)
      return
    }
  }
  return (
    <div className={props.toggle ? "editInput editInput-active" : "editInput"}>
      <form>
        <input type={"number"} placeholder='Timer' value={numTime} min={"1"} onKeyUp={(e) => {handleZeroValue(e.target.value)}} onChange={(e)=>{setNumTime(e.target.value)}} className="input"/>
        <input type={"number"} placeholder='Break' value={numBreak} min={"1"} onKeyUp={(e) => {handleZeroValue(e.target.value)}} onChange={(e)=>{setNumBreak(e.target.value)}} className="input"/>
        <button className='input submitBtn' type='submit' onClick={(e)=>{handleSubmit(e)}}>Submit</button>        
      </form>
    </div>
  )
}
