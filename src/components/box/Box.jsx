import React from 'react'
import './Box.css'

const Box = (props) => {
  return (
    <div className='box-card'>
        <a href="">{props.value}</a>
    </div>
  )
}

export default Box