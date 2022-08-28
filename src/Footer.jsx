import React , {useEffect ,  useRef} from 'react'
import hands from './images/hands.svg'
import {ReactComponent as Arrw } from './images/arrow.svg'
import MyButton from './MyButton'


function Footer({status}) {
    const myRef = useRef();
    useEffect(() => {
        if(status === 4 ){
            myRef.current.scrollIntoView({behavior: 'smooth' , block : 'start'}) 
        }
            
          
    }, [status])
  return (
    <div className='footer' ref={myRef} >
        <div className="formdiv">
            <h2>Explore product in <br /> new way<Arrw /> </h2>
            <p>We specialize in creating visual identities for <br /> products and branda in your company.</p>
            <div className="d-flex">
                <input type="text" name="" id="" placeholder='Your Email' />
                <MyButton>Start</MyButton>
            </div>
        </div>
        <div className="img">
          <img src={hands} alt="" srcset="" />
        </div>
    </div>
  )
}

export default Footer