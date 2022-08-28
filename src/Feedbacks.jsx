import React , {useEffect ,  useRef} from 'react'
import Feedback from './Feedback'
import feedav1 from './images/feedav1.svg'
import feedav2 from './images/feedav2.svg'
import feedav3 from './images/feedav3.svg'

function Feedbacks({status}) {

  const myRef = useRef();
  useEffect(() => {
      if(status === 2 ){
          myRef.current.scrollIntoView({behavior: 'smooth' , block : 'start'}) 
      }
          
        
  }, [status])
  return (
    <div className='feedbacks  w-100 ' ref={myRef}>
        <h1 className='text-center' >What our clients say</h1>
        <p className='text-center'> 
        See what our customer say about us. It really matter for us. How good or bad <br />
                we will make ir for evaluation to make EhyalLive better.
        </p>
        <div className="row reviews">
            <Feedback text='“I know in real-time where the money is spent,and I don’t have to lend out the company’s credit card anymore. What a relief!”'  name='Denny Hilguston' mail='@denny.hill'   src={feedav1} />
            <Feedback   name='Vani Pandey' mail='@vani.pandey' text='VISUALS are much better. The improvements in optics and resolution and much more than a modern console generation leap.'  src={feedav2} />
            <Feedback   name='milly Singh' mail='@milly.singh'  text='I can actually see the improvement in the graphics, not having the external sensors is a big plus.'    src={feedav3} />

        </div>
    </div>
  )
}

export default Feedbacks