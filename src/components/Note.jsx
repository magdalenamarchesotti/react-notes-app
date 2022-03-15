import React from 'react'
import "./style.css";

const Note = (props) => {
  return (
    <div className='divNote'>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
    </div>
  )
}

export default Note