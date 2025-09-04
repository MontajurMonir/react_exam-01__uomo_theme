import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Product from '../Product'
import Container from '../Container'
import Slider from 'react-slick'
import PrevArrow from '../PrevArrow'
import NextArrow from '../NextArrow'

const BestSeller = () => {
     const [apiData,setApiData] = useState([])
    useEffect(()=>{
        async function allData() {
            const allApiData = await axios.get('https://dummyjson.com/products')
            setApiData(allApiData.data.products)
            
            
        }
        allData()
    })
      var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
        rows: 2,
             autoplay: true,
     autoplaySpeed: 2000,

  };
  return (
    <>
 <Container>
        <div className="pb-5">
          <h3 className="text-[35px] text-menuColor text-center">
            Best <span className="font-bold">Seller</span>
          </h3>
        </div>
        <div className="-mx-4">
          <Slider {...settings}>
{
    apiData.map((item)=>
        (
        <div >
            <Product productImg={item.thumbnail} productName={item.title} productType={item.category} productPrice={item.price} />
        </div>
        )

    )
}

          </Slider>
        </div>
      </Container>

    </>
  )
}

export default BestSeller