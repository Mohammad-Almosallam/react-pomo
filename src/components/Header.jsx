import React, {useState,useEffect} from 'react'

function Header(props) {
  const [isMenuActive, setMenuActive] = useState(false)
  const [darkMode,setDark] = useState("")
  const [showHide, setShowHide] = useState("HIDE")
  
  function showSideMenu(){
    setMenuActive(prevValue => (!prevValue))
  }

  function changeText(){
    props.splineBtn()
    setShowHide(prevValue => prevValue === "HIDE" ? "SHOW" : "HIDE")
  }

  useEffect(()=>{
    darkMode === "darkmode" ? 
    document.body.classList.remove("darkmode") 
  : document.body.classList.add("darkmode")
  }, [darkMode])

  return (
    <div className="nav">
        <div><p className="logo"><a href="/">POMO</a></p></div>
        <div className="nav-req">
            <ul className={isMenuActive ? 'active' : null }>
                <li onClick={showSideMenu} className='close-menu'><ion-icon name="close-outline"></ion-icon></li>
                <li><a onClick={changeText}>{showHide} 3D</a></li>
                {/* <li><a href="/contact">contact</a></li>
                <li><a href="/about">about</a></li> */}
            </ul>
            <div onClick={showSideMenu}><ion-icon class="icons menu-btn" name="menu-outline"></ion-icon></div>
            <div onClick={()=>{
              darkMode === "darkmode" ? setDark("") : setDark("darkmode")
              props.renderSplineOnTheme()
              }}><ion-icon class="icons contrast-icon" id="theme-btn" name="contrast-outline"></ion-icon></div>
        </div>
    </div>
  )
}

export default Header
