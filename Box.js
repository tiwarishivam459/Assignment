import React from 'react'
import style from './Assignment.module.css'

function Box() {
    return (
        <div className={style.list2}>            
            <ul className={style.list1}>
                <li className={style.list}></li>
                <li className={style.list}></li>
                <li className={style.list} id={style.list1}></li>
                <li className={style.list} id={style.list1}></li>
                <li className={style.list} id={style.list1}></li>
                <li className={style.list} id={style.list1}></li>
                <li className={style.list} id={style.list1}></li>
            </ul>
            <h1 style={{"color":"aqua"}}>45 hours left</h1>
            <h4 className={style.side}>out of 50 hours</h4>
        </div>
    )
}

export default Box