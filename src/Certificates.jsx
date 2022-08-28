import React from 'react'
import { ReactComponent as Hearts} from './images/hearts.svg'
import ico1 from './images/ico1.svg'
import ico2 from './images/ico2.svg'
import ico3 from './images/ico3.svg'
import ico4 from './images/ico4.svg'

function Certificates() {
  return (
    <div  className='Certificates bg-daner '   >
        <div className="solid-text w-50">
            <h1>Our company values culture <Hearts />   </h1>
            <div>We specialize in creating visual identities for products and branda in your company.</div>
        </div>
        <div className="icons  ">
            <div className="line-one mb-4 bg-priary">
                <div className="icon fw-bld text-center col-6">
                    <img src={ico1} alt="" srcset="" width='60px'  />
                    <p className='my-1' ><>Be Sincere</></p>
                </div>
                <div className="icon fw-bld text-center col-6">
                    <img src={ico2} alt="" srcset="" width='60px' />
                    <p className='my-1'><>Stronger together</></p>
                </div>
            </div>
          <div className="line-one my-2">
          <div className="icon fw-bld text-center col-6">
                <img src={ico3} alt="" srcset="" width='60px' />
                <p className='my-1'><>Keep it simple</></p>
            </div>
            <div className="icon fw-bld text-center col-6">
                <img src={ico4} alt="" srcset="" width='60px' />
                <p className='my-1'><>Take intelligent risks</></p>
            </div>
          </div>
            
            
        </div>
    </div>
  )
}

export default Certificates