import React from 'react'
import style from './Assignment.module.css'

function Image({Name, Number, Task, ImgURL}) {
  return (
    <div className={style.row}>
      <div className={style.imagebody1}>
        <img className={style.image} src={ImgURL} alt={Name} />
      </div>
      <div className={style.write}>
        <h1 className={style.fon}>{Name}</h1>
        <div className={style.fonrow}>
          <h1 className={style.fon1}>{Number}</h1>
          <h1 className={style.fon2}>{Task}</h1>
        </div>
      </div>
    </div>
  )
}

export default Image