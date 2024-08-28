import React from 'react'

function Button({count}) {
  return (
    <button className="btn" onClick={()=>{
        count++
    }}>Add</button>
  )
}

export default Button