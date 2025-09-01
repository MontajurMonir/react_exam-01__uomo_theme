import React from "react";
import Image from "../Image";
import Deal from "/src/assets/weekendDeal.jpg";
import { Link } from "react-router-dom";
import Heading from "../Heading";
import Flex from "../Flex";
import Container from "../Container";
import WeekOne from '/src/assets/weekOne.png'
import WeekTwo from '/src/assets/weekTwo.png'

const WeekendDeal = () => {
  return (
    <>
      <div className="relative">
        <Link>
        <Image imgSrc={Deal} />
      </Link>
      <Flex className="gap-x-5 absolute bottom-[10%] left-[11%]">
        <div className="">
          <p className="text-[30px] text-menuColor items-center">
            05 <span className="ml-4"> : </span>
          </p>
          <Heading className="text-[16px] text-[#767676] font-bold " text="DAYS" as="h4"/>
        </div>
        <div className="">
          <p className="text-[30px] text-menuColor items-center">
            09 <span className="ml-6"> : </span>
          </p>
          <Heading className="text-[16px] text-[#767676] font-bold " text="HOURS" as="h4"/>
        </div>
        <div className="">
          <p className="text-[30px] text-menuColor items-center">
            40 <span className="ml-4"> : </span>
          </p>
          <Heading className="text-[16px] text-[#767676] font-bold " text="MINS" as="h4"/>
        </div>
        <div className="">
          <p className="text-[30px] text-menuColor items-center">
            28 
          </p>
          <Heading className="text-[16px] text-[#767676] font-bold " text="SEC" as="h4"/>
        </div>



      </Flex>
      </div>
      <Container>
        <Flex className={"gap-x-5 py-24"}>
            <div className="">
                <Link><Image imgSrc={WeekOne}/></Link>
            </div>
            <div className="">
                <Link><Image imgSrc={WeekTwo}/></Link>
            </div>
        </Flex>
      </Container>
    </>
  );
};

export default WeekendDeal;
