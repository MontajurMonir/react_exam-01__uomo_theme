import React from "react";
import { Link } from "react-router-dom";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import One from "/src/assets/bannerOne.png";
import Two from "/src/assets/bannerTwo.png";
import Three from "/src/assets/bannerThree.png";
import Four from "/src/assets/bannerFour.png";



const Banner = () => {
  return (
<>
    <Link>
      <div
        className={`bg-[url(/src/assets/banner.png)] h-[800px] w-full bg-center bg-cover bg-no-repeat`}
      ></div>
    </Link>
    <Container>
      <Flex className={"gap-x-5 items-start h-[560px] my-24"}>
        <div className="w-1/2 h-full">
          <Image className={"h-full"} imgSrc={One}/> 
        </div>
        <div className="w-1/2 h-full grid gap-y-5">
        <div >
          <Image imgSrc={Two}/>
        </div>
        <Flex className={"gap-x-5"}>
          <div >
            <Image imgSrc={Three}/>
          </div>
          <div >
            <Image imgSrc={Four}/>
          </div>
          
        </Flex>
        </div>
      </Flex>
    </Container>
</>

  );
};

export default Banner;
