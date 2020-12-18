import React from 'react'

function Information({ information }) {
  console.log(information)
  return (
    <div>
      <h5>
        <a href={information.url}>{information.name}</a>
      </h5>
      <p>Kaynak: {information.source}</p>
      <h3>{information.description}</h3>
    </div>
  )
}

export default Information
