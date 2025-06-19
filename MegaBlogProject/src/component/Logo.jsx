import React from 'react'
import logoImage from "../assets/logo.png"

function Logo({width = '20px'}) {
  // const imageWidth = `w-[${width}]`
  // console.log(imageWidth)
  return (
    <img src={logoImage} className="w-[70px] rounded-full" />
  )
}

export default Logo