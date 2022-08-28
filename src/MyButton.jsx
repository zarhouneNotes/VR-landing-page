import React from 'react'

function MyButton({children}) {
  return (
    <div  className='btn btn-primary mybtn' >
        {children}
    </div>
  )
}

export default MyButton