import React from 'react'
import Header from './Header'
import Timer from './Timer'
import Quotes from './Quotes'

function App(){

  return(
    <div >
        <Header/>
        <div className='space'>
          <Timer/>
          <Quotes/>
        </div>
    </div>
  )
}

export default App