import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import Logo from "/src/assets/logo.png";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { RiMenu2Line } from "react-icons/ri";

const Header = () => {
  return (
    <>
      <div className="">
        <Container>
          <Flex className={"gap-x-14 py-7 "}>
            <div>
              <Image imgSrc={Logo} />
            </div>
            <Flex className="justify-between w-full">
              <div>
                <ul className="flex items-center gap-x-9 text-[14px] font-medium text-menuColor">
                  <li>HOME</li>
                  <li>SHOP</li>
                  <li>COLLECTION</li>
                  <li>JOURNAL</li>
                  <li>LOOKBOOK</li>
                  <li>PAGES</li>
                </ul>
              </div>
              <div>
                <Flex className={"gap-x-7 text-menuColor text-[20px] font-medium"}>
                  <IoSearchOutline />
                  <FaRegUser />
                  <FaRegHeart />
                  <HiOutlineShoppingBag />
                  <RiMenu2Line />
                </Flex>
              </div>
            </Flex>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Header;
