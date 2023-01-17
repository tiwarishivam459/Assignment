import React from 'react'

import style from './Assignment.module.css'

function RoundLock() {
  return (
    <div className={style.round}>
    <img src='https://i.pinimg.com/originals/ab/f6/dd/abf6dd52ce2d2297d373b966f9d69b1c.jpg' alt='thumbprint' height="100px" width="100px" className={style.thumbprint} />
    <h1>ENTER YOUR PILEARNING PASSWORD</h1>
    <input type="password" />
    <button>Enter Lab</button>
    </div>
  )
}

export default RoundLock