import React, { useState } from 'react'
import Header from './Header'
import Timer from './Timer'
import Quotes from './Quotes'
import Spline from '@splinetool/react-spline';


function App(){
  const [isWhite, setWhite] = useState(false)
  const [removeBtn, setRemoveBtn] = useState(true)
  
  function renderOnTheme(value){
    setWhite(value => !value)
  }
  function handleSpline(value){
    setRemoveBtn(value => ! value)
  }

  return(
    <div className='parent'>
        <Header splineBtn={handleSpline} renderSplineOnTheme={renderOnTheme}/>
        
        {isWhite && removeBtn && <Spline className='clockSpline' scene="https://prod.spline.design/cs-JIFZt2SCfkx-W/scene.splinecode" />}

        <div className='space'>
          <Timer/>
          <Quotes/>
        </div>
    </div>
  )
}


export default App