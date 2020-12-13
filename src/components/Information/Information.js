import React from 'react'

function Information({ information }) {
  console.log(information)
  return (
    <div>
      <h3>
        <a href={information.url}>{information.name}</a>
      </h3>
      <p>Kaynak: {information.source}</p>
      <h5>{information.description}</h5>
    </div>
  )
}

export default Information
