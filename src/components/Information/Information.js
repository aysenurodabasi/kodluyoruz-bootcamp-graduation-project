import React from 'react'

function Information({information}) {
  return (
    <div>
      <h3>
              <a href={information.url}>{information.name}</a>
            </h3>
            <p>Kaynak: {information.source}</p>
            <p>{information.description}</p>
    </div>
  )
}

export default Information
