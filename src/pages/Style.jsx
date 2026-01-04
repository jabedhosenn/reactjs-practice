import React from 'react'
import './Style.css'

function Style() {
    const ElementOne = {
        color: 'red',
        backgroundColor: 'green',
    }
  return (
    <div>
        <br />
        <hr />
        <br />
        <h1 style={ElementOne}>Internal CSS</h1>
        <br />
        <h2 className='style'>External CSS</h2>
    </div>
  )
}

export default Style