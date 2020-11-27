import React from 'react'
import MoonLoader from "react-spinners/MoonLoader";


function Loading({loading}) {
  return (
    <div>
      <MoonLoader
            size={40}
            color={"#123abc"}
            loading={loading}
          />
    </div>
  )
}

export default Loading
