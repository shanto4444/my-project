import React, { useState } from "react";
import { CiMail, CiUser, CiHeart, CiShoppingCart } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { GiCrossedSabres } from "react-icons/gi";

const Header = () => {
  let [head, setHead] = useState(false);

  const handleManu2 = () => {
    setHead(!head);
  };

  return (
    <section className="bg-zinc-600 py-5 text-white overflow-x-hidden ">
      <div className="container mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex flex-wrap items-center gap-5">
            <div className="flex items-center gap-2 font-[josefinSans] text-[16px]">
              <p>
                <CiMail />
              </p>
              <p>mdshantohosen803@gmail.com</p>
            </div>
            <div className="flex items-center gap-2 font-[josefinSans] text-[16px]">
              <p>
                <IoIosCall />
              </p>
              <p>+8801776684444</p>
            </div>
          </div>
          <div className="flex items-center">
            <ul
              className={`lg:flex lg:items-center lg:gap-16 lg:static font-[josefinSans] text-[16px] ${
                head
                  ? "pl-[50%] absolute text-center top-[63px] left-0 right-0 duration-500 text-black w-full bg-zinc-500 space-y-5 py-4"
                  : "absolute -top-52 left-0 right-0 w-full"
              }`}
            >
              <li className="flex items-center gap-1">
                English
                <FaAngleDown />
              </li>
              <li className="flex items-center gap-1">
                USD <FaAngleDown />
              </li>
              <li className="flex items-center gap-1">
                login <CiUser />
              </li>
              <li className="flex items-center gap-1">
                Wishlist <CiHeart />
              </li>
              <li className="flex items-center text-[30px] gap-1">
                <CiShoppingCart />
              </li>
            </ul>
            <div
              onClick={handleManu2}
              className="flex items-center  text-xl px-4 lg:hidden "
            >
              {head === true ? <GiCrossedSabres /> : <FaBarsStaggered />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
