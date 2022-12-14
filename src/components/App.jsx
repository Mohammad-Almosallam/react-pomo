import React, { useEffect, useState } from 'react'
import Header from './Header'
import Timer from './Timer'
import Quotes from './Quotes'
import Spline from '@splinetool/react-spline';
import Alert from './Alert';

function App(){
  const [isWhite, setWhite] = useState(true)
  const [removeBtn, setRemoveBtn] = useState(true)

  useEffect(()=>{
    document.body.classList.add("darkmode")
  },[])
  
  function renderOnTheme(value){
    setWhite(value => !value)
  }
  function handleSpline(value){
    setRemoveBtn(value => ! value)
  }

  return(
    <div className='parent'>
        <Header splineBtn={handleSpline} renderSplineOnTheme={renderOnTheme}/>
        <Alert/>
        {isWhite && removeBtn && <Spline className='clockSpline' scene="https://prod.spline.design/cs-JIFZt2SCfkx-W/scene.splinecode" />}

        <div className='space'>
          <Timer/>
          <Quotes/>
        </div>
    </div>
  )
}


export default App