import React from 'react'

function Feature({children , title , text}) {
 
  return (
    <div className="feature bg-sucess my-2 col-6">
        {children}
        <div className="details bg-waning">
            <h4>{title}</h4>
            <p>
                {text}
            </p>
        </div>
    </div>
  )
}

export default Feature