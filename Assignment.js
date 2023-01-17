import React from 'react'
import style from './Assignment.module.css'
import Box from './Box'
import Header from './Header'
import Image from './Image'
import RoundLock from './RoundLock'

function Assignment() {
  return (
    <div className={style.flexContainer}>
      <div className={style.cardcontainer1}>
        <Header />
        <Image ImgURL={"https://www.shutterstock.com/image-vector/man-exercising-health-fitness-doing-260nw-525283288.jpg"} Name={"EXERCISES"} Number={"9"} Task={"completed out of 84"} />
        <Image ImgURL={'https://thumbs.dreamstime.com/b/increasing-stocks-icon-trendy-increasing-stocks-logo-concept-increasing-stocks-icon-trendy-increasing-stocks-logo-concept-131188285.jpg'} Name={"PROJECTS"} Number={"2"} Task={"completed out of 6"} />
        <Image ImgURL={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEMukpp92z0eOWiGQrSlteF0IZH4V1zTXvf4MrCxfjjg&s'} Name={"TIME SPENT"} Number={"5"} Task={"hours till now"} />
      </div>
      <div className={style.cardcontainer1}>
        <Box />
      </div>
      <div className={style.clock}>
      <RoundLock />
      </div>
    </div>
  )
}

export default Assignment