import React from 'react'

function Shadow({top , left , right}) {
  return (
    <div className='shadow bg-dange' style={{position:'absolute' , top : top , right: right , left : left}} >
        
    </div>
  )
}

export default Shadow