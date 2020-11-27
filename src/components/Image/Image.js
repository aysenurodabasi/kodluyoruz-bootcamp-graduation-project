import React from 'react'
import './Image.css'

function Image({data}) {
  return (
    <div className="imageContent">
      <img src={data} /> 
    </div>
  )
}

export default Image
