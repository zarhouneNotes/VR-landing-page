import React , {useEffect ,  useRef} from 'react'
import Feature from './Feature'
// import {ReactComponent as GamerOne} from './images/gamerOne.svg'
// import {ReactComponent as GamerTwo} from './images/gamer2.svg'
import Gamer3 from './images/gamer3.svg'
import Gamer4 from './images/gamer4.svg'
import  GamerOne from './images/gamerOne.svg'
import  GamerTwo from './images/gamer2.svg'

function Features({status}) {
  const myRef = useRef();
  useEffect(() => {
      if(status === 3 ){
          myRef.current.scrollIntoView({behavior: 'smooth' , block : 'start'}) 
      }
          
        
  }, [status])


  return (
    <div className='features bg-dangr' ref={myRef} >
        <h3 className='my-4'  >Mixed Reality Headsets</h3>
        <div className="   row">      
            <Feature  text='A Network of 3D virtual worlds focused on social connection.' title='Metaverse' > 
                 <img src={GamerOne} alt="React Logo" />
            </Feature>
            <Feature  text='AI and IoT are both emerging innovative technologies with a lot of potentials. ' title='AIoT'   > 
                 <img src={GamerTwo} alt="React Logo" />
            </Feature>
            <Feature  text='HoloLens display information, blend with the real world , or even simulate a virtual world. ' title='HoloLens'   >
                 <img src={Gamer3} alt="React Logo" />
            </Feature>
            <Feature  text='Method is great to start students reading and inferring with little assistance from the instructor' title='TPCASTT'   > 
              <img src={Gamer4} alt="React Logo" />
            </Feature>
           
        </div>
    </div>
  )
}

export default Features