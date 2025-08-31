import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import Logo from "/src/assets/logo.png";
import Heading from "../Heading";
import {
  FaAngleUp,
  FaFacebookF,
  FaGripLinesVertical,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Discover from "/src/assets/discover.svg";
import MasterCard from "/src/assets/mastercard.svg";
import Visa from "/src/assets/visa.svg";
import Paypal from "/src/assets/paypal.svg";
import Skrill from "/src/assets/skrill.svg";

const Footer = () => {
  return (
    <>
      <div className="bg-[#E4E4E4] w-full ">
        <Container>
          <Flex className={"justify-between items-start py-24"}>
            <div className="">
              <Image imgSrc={Logo} className="pb-11" />
              <div className="text-[14px] text-menuColor gap-y-2 grid">
                <Heading
                  className=" "
                  text="1418 River Drive, Suite 35 Cottonhall, CA 9622"
                  as="h5"
                />
                <Heading className="pb-5 " text="United States" as="h5" />
                <Heading
                  className=" font-medium"
                  text="sale@uomo.com"
                  as="h5"
                />
                <Heading
                  className="font-medium "
                  text="+1 246-345-0695"
                  as="h5"
                />
              </div>
              <Flex className="pt-12 gap-x-7 text-[18px]  ">
                <FaLinkedin />
                <FaTwitter className="text-[#767676]" />
                <FaFacebookF />
                <FaInstagram />
                <FaYoutube />
                <FaPinterest />
              </Flex>
            </div>
            <div className="">
              <Heading
                className="text-[18px] font-medium pb-11"
                text={"COMPANY"}
                as={"h4"}
              />
              <ul className="gap-y-6 grid text-[14px] text-menuColor">
                <li> About Us</li>
                <li>Careers</li>
                <li>Affiliates</li>
                <li>Blog</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="">
              <Heading
                className="text-[18px] font-medium pb-11"
                text={"SHOP"}
                as={"h4"}
              />
              <ul className="gap-y-6 grid text-[14px] text-menuColor">
                <li> New Arrivals</li>
                <li>Accessories</li>
                <li>Men</li>
                <li>Women</li>
                <li>Shop All</li>
              </ul>
            </div>
            <div className="">
              <Heading
                className="text-[18px] font-medium pb-11"
                text={"HELP"}
                as={"h4"}
              />
              <ul className="gap-y-6 grid text-[14px] text-menuColor">
                <li> Customer Service</li>
                <li>My Account</li>
                <li>Find a Store</li>
                <li>Legal & Privacy</li>
                <li>Contact</li>
                <li>Gift Card</li>
              </ul>
            </div>
            <div className="">
              <Heading
                className="text-[18px] font-medium pb-11"
                text={"SUBSCRIBE"}
                as={"h4"}
              />
              <div className="">
                <p className="gap-y-2 grid text-[14px] text-menuColor">
                  Be the first to get the latest news about trends,
                  <span>promotions, and much more!</span>
                </p>
                <div className="relative mt-5">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="bg-white p-5 w-[330px]  outline-0 "
                  />
                  <button className="text-[14px] font-medium text-menuColor absolute right-3 top-1/2 -translate-y-1/2">
                    Join
                  </button>
                </div>
                <Heading
                  className="text-[15px] font-medium text-menuColor pt-11 pb-5"
                  text="Secure payments"
                  as="h3"
                />
                <Flex className={"w-[330px] justify-between "}>
                  <Image className={"h-8 "} imgSrc={Discover} />
                  <Image className={"h-8 "} imgSrc={MasterCard} />
                  <Image className={"h-8 "} imgSrc={Visa} />
                  <Image className={"h-8 "} imgSrc={Paypal} />
                  <Image className={"h-8 "} imgSrc={Skrill} />
                </Flex>
              </div>
            </div>
          </Flex>
          <br className="text-amber-400 w-full h-1" />
          <Flex className={"text-menuColor text-[14px] justify-between py-8"}>
          
              <Heading text="©2020 Uomo" as="h5" />
          
            
              <p className="flex gap-x-3 items-center">
                <span className="text-[#767676]">Language </span>
                United Kingdom <FaGripLinesVertical /> English <FaAngleUp className="text-[18px]"/>
                <span className="text-[#767676]">Currency</span>
                $ USD <FaAngleUp className="text-[18px]"/>
              </p>
            
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Footer;
