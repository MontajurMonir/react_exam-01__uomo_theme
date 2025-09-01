import React from "react";
import Image from "./Image";

import Heading from "./Heading";

import { FaRegHeart } from "react-icons/fa";
import Flex from "./Flex";

const Product = ({productImg,productName,productType,productPrice}) => {
  return (
    <>

        <div className="px-4">
          <div className="">
            <Image className={"w-full"} imgSrc={productImg} />
          </div>
          <Flex className="pt-4 pb-2 justify-between  items-start">
            <div className="">
              <Heading
                className="text-[14px] text-lightColor"
                text={productType}
                as="h5"
              />
              <Heading
                className="text-[16px] text-menuColor"
                text={productName}
                as="h5"
              />
              <Heading
                className="text-[16px] text-menuColor"
                text={`$ ${productPrice}`}
                as="h5"
              />
            </div>
            <div className="">
                <FaRegHeart />
            </div>
          </Flex>
        </div>

    </>
  );
};

export default Product;
