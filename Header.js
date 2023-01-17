import React from 'react'
import style from './Assignment.module.css'

function Header() {
    return (
        <div>
            <h1>Java</h1>
            <div className={style.cardtitle1}>
                <p>This course is provisioned by</p><p className={style.bold}>Nexxt Labs</p>
            </div>
            <div className={style.cardbody1}>
                <li>Labs</li>
                <li>Exercises</li>
                <li>Do it Yourself</li>
            </div>
        </div>
    )
}

export default Header