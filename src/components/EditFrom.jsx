import React, { useState } from 'react'
import { InputNumber } from 'antd';
import { Button } from 'antd';
import "antd/lib/input-number/style/index.css";
import "antd/lib/button/style/index.css";


export default function EidtInput(props) {
  const [numTime, setNumTime]= useState(1)
  const [numBreak, setNumBreak]= useState(1)
  
  return (
    <div className='editInput'>
      <form>
        <InputNumber min={1} placeholder="Time" onChange={(e)=>{setNumTime(e)}} />
        <InputNumber min={1} placeholder="Break" onChange={(e)=>{setNumBreak(e)}} />
        <Button type='default' onClick={()=>{props.onTimeChange(numTime,numBreak)}} >Submit</Button>
        
      </form>
    </div>
  )
}