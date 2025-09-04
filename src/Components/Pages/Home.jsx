import React from 'react'
import Banner from '../Layout/Banner'
import WeekendDeal from '../Layout/WeekendDeal'
import LimitedEdition from '../Layout/LimitedEdition'
import Product from '../Product'
import BestSeller from '../Layout/BestSeller'

const Home = () => {
  return (
    <>
    <Banner/>
    <BestSeller/>
    <WeekendDeal/>
    <LimitedEdition/>
    
    </>
  )
}

export default Home