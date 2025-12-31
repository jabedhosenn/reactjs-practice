import React from 'react'
import "./Focus.css"

function Focus() {
    const handleFocus = () => {
        console.log("Input field is focused!");
    }
  return (
    <div className='Focus'>
        <h2>Focus Component</h2>
        <input type="text" onFocus={handleFocus} />
    </div>
  )
}

export default Focus