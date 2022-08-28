import React from 'react'
import {ImHome} from 'react-icons/im'
import {MdFeaturedPlayList , MdFeedback , MdEmail} from 'react-icons/md'

function Pagination({status , setStatus, navHidden }) {
  return (
    <div className='pagination' style={{visibility:navHidden ? 'visible' : 'hidden'}} >
        <ImHome onClick={()=>{setStatus(1)}}             className={`mx-auto pagicon ${status === 1 ?  ' pagicon-active' : ''}`} />
        <MdFeaturedPlayList onClick={()=>{setStatus(3)}}  className={`mx-auto pagicon ${status === 3 ?  ' pagicon-active' : ''}`}  />
        <MdFeedback onClick={()=>{setStatus(2)}}           className={`mx-auto pagicon ${status === 2 ?  ' pagicon-active' : ''}`} />
       
        <MdEmail        onClick={()=>{setStatus(4)}}      className={`mx-auto pagicon ${status === 4 ?  ' pagicon-active' : ''}`}  />
    </div>
  )
}

export default Pagination