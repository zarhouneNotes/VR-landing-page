import React, { useState , useEffect } from 'react'
import MyButton from './MyButton'
import Shadow from './Shadow';
import {ReactComponent as Logo} from './images/purple.svg'

function Navbar({goThere}) {
    const [isActive , setIsActive] = useState(null)
    useEffect(() => {
      goThere(isActive)
    }, [isActive])
  return (
    <div className='navbar py-4'  >
      {/* <Shadow    /> */}
        <h3 className="logo">  LIGHT   </h3>
        <div className="menu">
            <li onClick={(e)=>{setIsActive(1)  ; e.preventDefault() ;  }}  className={isActive ===1 ? "active-link" : ''} ><a href="">Home</a></li>
            <li onClick={(e)=>{setIsActive(2)  ; e.preventDefault() ;  }}  className={isActive ===2 ? "active-link" : ''}  ><a href="">Feedbacks</a></li>
            <li onClick={(e)=>{setIsActive(3)  ; e.preventDefault() }}  className={isActive ===3 ? "active-link" : ''}  ><a href="">Features</a></li>
           <li onClick={(e)=>{setIsActive(4)  ; e.preventDefault() }}  > <MyButton   ><a href="">Subscribe</a></MyButton></li>

        </div>
    </div>
  )
}

export default Navbar