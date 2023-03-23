import React from 'react'

function Header(props) {
  return (
    <div className='headerBox'>
        <h3>{props.words}</h3>
    </div>
  )
}

export default Header