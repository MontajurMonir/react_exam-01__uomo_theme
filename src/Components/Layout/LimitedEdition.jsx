import React, { useEffect, useState } from "react";
import Container from "../Container";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Product from "../Product";
import PrevArrow from "../PrevArrow";
import NextArrow from "../NextArrow";
import axios from "axios";

const LimitedEdition = () => {
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
  };
  return (
    <>
      <Container>
        <div className="pb-5">
          <h3 className="text-[35px] text-menuColor text-center">
            LIMITED <span className="font-bold">EDITION</span>
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
  );
};

export default LimitedEdition;


// {
//     apiData.map((item)=>{
//         return(
//         <div >
//             <Product productImg={item.thumbnail} />
//         </div>
//         )

//     })
// }