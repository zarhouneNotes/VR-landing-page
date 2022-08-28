import React , {useEffect ,  useRef} from 'react'
import boy from './images/boy.png'
import girl from './images/girl.png'
import MyButton from './MyButton'

function Gamers() {

  


  return (
    <div  className='gamers text-light'  >
        <div className="girl">
            <img src={girl} alt="" srcset=""  width='80%' />
        </div>
        <div className="boy">
           <img src={boy} alt="" srcset="" width='80%' />
        </div>
        <div className="by-gamers">
            <h3>New Experience In Playing Game</h3>
            <p>
            You can try playing the game with a <br />
            new style and of course a more real <br />
            feel, like you are the main character <br />
            in your game and adventure in this <br />
            new digital world.
            </p>
            <MyButton  >Get it Now</MyButton>
        </div>
    </div>
  )
}

export default Gamers