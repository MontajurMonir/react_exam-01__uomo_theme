import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import Logo from "/src/assets/logo.png";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { RiMenu2Line } from "react-icons/ri";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <>
      <div className="">
        <Container>
          <Flex className={"gap-x-14 py-7 "}>
            <div>
              <Link>
                <Image imgSrc={Logo} />
              </Link>
            </div>
            <Flex className="justify-between w-full">
              <div>
                <ul className="flex items-center gap-x-9 text-[14px] font-medium text-menuColor">
                  <Link to={"/"}>
                    <li>HOME</li>
                  </Link >
                  <Link to={"shop"}>
                    <li>SHOP</li>
                  </Link>
                  <Link to={"collection"}>
                    <li>COLLECTION</li>
                  </Link>
                  <Link to={"journal"}>
                    <li>JOURNAL</li>
                  </Link>
                  <Link to={"lookbook"}>
                    <li>LOOKBOOK</li>
                  </Link>
                  <Link to={"pages"}>
                    <li>PAGES</li>
                  </Link>
                </ul>
              </div>
              <div>
                <Flex
                  className={"gap-x-7 text-menuColor text-[20px] font-medium"}
                >
                  <IoSearchOutline />
                  <Link to={"signup"}><FaRegUser />  </Link>
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
