import React from 'react'
import { GrNext } from 'react-icons/gr'

const NextArrow = (props) => {
    const {onClick} = props
  return (
    <div className="text-lightColor text-[30px] absolute top-1/2 -right-[30px] -translate-y-1/2" onClick={onClick}><GrNext /></div>
  )
}

export default NextArrow