import React from 'react'
import "./Keyboard.css"

function Keyboard() {
    const handleKeyDown = (event) => {
        console.log(`Key down: ${event.key}`);
    }

    const handleKeyUp = (event) => {
        console.log(`Key up: ${event.key}`);
    }

    const handleKeyPress = (event) => {
        console.log(`Key pressed: ${event.key}`);
    }

  return (
    <div className='Keyboard'>
        <h2>Keyboard Component</h2>
        <input type="text" placeholder='Type something...' onKeyDown={handleKeyDown} />
        <input type="text" placeholder='Type something...' onKeyUp={handleKeyUp} />
        <input type="text" placeholder='Type something...' onKeyPress={handleKeyPress} />
    </div>
  )
}

export default Keyboard