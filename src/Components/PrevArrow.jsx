import React from 'react'
import { GrPrevious } from 'react-icons/gr'

const PrevArrow = (props) => {
    const {onClick} = props
  return (
    <div className="text-lightColor text-[30px] absolute top-1/2 -left-[30px] -translate-y-1/2" onClick={onClick} ><GrPrevious /></div>
  )
}

export default PrevArrow