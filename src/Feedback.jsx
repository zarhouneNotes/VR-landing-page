import React from 'react'


function Feedback({text , src , name , mail}) {
  return (
    <div className=' py-3 feedback '>
        <small className='fw-bold ' ><span className='text-warning'>starstar</span>star</small>
        <p>
        {text}
        </p>
        <div className="user d-flex ">
            <img src={src} alt="" srcset="" width="50px"  />
            <div className="user-info fw-bold">
                <p className="">{name}</p>
                <p className="text-danger"> {mail} </p>
            </div>
        </div>
    </div>
  )
}

export default Feedback