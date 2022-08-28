import React , {useEffect ,  useRef} from 'react'
import MyButton from './MyButton'
import heroImg from './images/hero.png'
import av1 from './images/av1.png'
import av2 from './images/av2.png'
import av3 from './images/av3.png'
import av4 from './images/av4.png'
import Shadow from './Shadow'

export default function Hero({status}) {

  const myRef = useRef();
  useEffect(() => {
      if(status === 1 ){
          myRef.current.scrollIntoView({behavior: 'smooth' , block : 'start'}) 
      }
          
        
  }, [status])


  return (
    <div className='hero ' ref={myRef}  >
        <div className="lhdra">
            <h1 className='big-text'  >Let’s Explore <br className="desktop-br" /> Three-Dimensional<br className="desktop-br" /> visual</h1>
            <p>With virtual technology you can see the digital world<br className="desktop-br" /> feel more real and you can play the game with a new<br className="desktop-br" /> style.</p>
            <div className="buttns">
              <MyButton>Get it now</MyButton>
              <div>Explore device</div>
            </div>

            <div className="avatars d-flex">
              <div className="avatar-container d-flex">
                <img src={av1} alt="" srcset=""    />
                <img src={av2} alt="" srcset=""    />
                <img src={av3} alt="" srcset=""    />
                <img src={av4} alt="" srcset=""    />
              </div>
              <div className="online fw-bld">
                 &#x2022; <small>400K people online</small>
              </div>
            </div>
          <Shadow  left='-8cm'  top='10cm' />
          <Shadow  right='-8cm'  top='14cm' />
        </div>





        <div className="hero-right bg-warnng">
            <div className="hero-img mx-auto">
                <img src={heroImg} alt="" srcset=""  width="100%" /> 
            </div>
            <div className="sou-image">
              <h4>Cinematic Virtual Reality</h4>
              <hr />
              <p className='text-center'  >
              Let’s be the best for more real and <br /> effective results and ready <br />
              to explore the limitless world that we <br /> have prepared for you.

              </p>
            </div>
        </div>
        
    </div>
  )
}
