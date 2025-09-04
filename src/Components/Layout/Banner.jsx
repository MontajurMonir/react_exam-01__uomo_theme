import React from "react";
import { Link } from "react-router-dom";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import One from "/src/assets/bannerOne.png";
import Two from "/src/assets/bannerTwo.png";
import Three from "/src/assets/bannerThree.png";
import Four from "/src/assets/bannerFour.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  var settings = {
    slidesToShow: 1,
    slidesToScroll:1,
    infinite:true,
    speed:500,
    dots:true,
     autoplay: true,
     autoplaySpeed: 2000,
      

     
    appendDots: dots => (
      <div
        style={{
          // backgroundColor: "#ddd",
          
          borderRadius: "20px",
          padding: "10px",
          position: "absolute",
          top: "86%",
          left:"7%",
           width: "fit-content",
           height: "fit-content"
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),

   customPaging: i => (
  <div className="custom-dot"></div>
),

  };
  return (
    <>
      <Slider {...settings}>
        <div>
          
            <div
              className={`bg-[url(/src/assets/bannerSliderOne.png)] h-[800px] w-full bg-center bg-cover bg-no-repeat`}
            ></div>
          
        </div>
        <div>
          
            <div
              className={`bg-[url(/src/assets/bannerSliderOne.png)] h-[800px] w-full bg-center bg-cover bg-no-repeat`}
            ></div>
          
        </div>
        <div>
          
            <div
              className={`bg-[url(/src/assets/bannerSliderTwo.webp)] h-[800px] w-full bg-center bg-cover bg-no-repeat`}
            ></div>
          
        </div>
        <div>
          
            <div
              className={`bg-[url(/src/assets/bannerSliderOne.png)] h-[800px] w-full bg-center bg-cover bg-no-repeat`}
            ></div>
          
        </div>

      </Slider>
      <Container>
        <Flex className={"gap-x-5 items-start h-[560px] my-24"}>
          <div className="w-1/2 h-full">
            <Image className={"h-full"} imgSrc={One} />
          </div>
          <div className="w-1/2 h-full grid gap-y-5">
            <div>
              <Image imgSrc={Two} />
            </div>
            <Flex className={"gap-x-5"}>
              <div>
                <Image imgSrc={Three} />
              </div>
              <div>
                <Image imgSrc={Four} />
              </div>
            </Flex>
          </div>
        </Flex>
      </Container>
    </>
  );
};

export default Banner;
