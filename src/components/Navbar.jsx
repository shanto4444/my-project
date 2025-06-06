import React, { useContext } from "react";
import img1 from "../assets/Hekto.png";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { GiCrossedSabres } from "react-icons/gi";
import { useState } from "react";
import { apiData } from "./ContexApi";
const Navbar = () => {
  let data = useContext(apiData);

  let [manuShaw, setManuShaw] = useState(false);
  const handleManu = () => {
    setManuShaw(!manuShaw);
  };

  let [searchResult, setSearchResult] = useState([]);

  const handleSearch = (e) => {
    let filterProducts = data.filter((item) =>
      item.title.toLowerCase().startsWith(e.target.value.toLowerCase())
    );
    setSearchResult(filterProducts);
    if (e.target.value == "") {
      setSearchResult([]);
    }
  };

  return (
    <section className="bg-slate-300 py-2 text-black overflow-x-hidden">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <img src={img1} alt="logo img" />
          </div>
          <div>
            <ul
              className={`lg:flex lg:gap-12 lg:items-center lg:static font-[lato] text-[16px]  ${
                manuShaw
                  ? "absolute top-[107px] left-0 pl-20 pt-7 pb-7 duration-700 ease-in-out space-y-14 w-[80%] bg-slate-200"
                  : "absolute top-[107px] -left-64 w-[80%] "
              }`}
            >
              <li className="flex items-center relative group">
                <Link to="/">Home</Link>
                <FaAngleDown />
                {/* <ul className=" top-7 left-0 absolute hidden group-hover:block">
                  <li>Home</li>
                  <li>about</li>
                  <li>products</li>
                  <li>blog</li>
                  <li>contact</li>
                </ul> */}
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/product">Products</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/contacts">Contact</Link>
              </li>
              <li>
                <div className="flex items-center">
                  <input
                    onChange={handleSearch}
                    className="h-10 lg:w-64 w-36 outline-none border pl-5 bg-gray-300"
                    type="text"
                  />
                  {searchResult.length > 0 && (
                    <div className="absolute top-28 z-10 px-7 font-[lato] text-[16px] bg-slate-300 h-[500px] overflow-y-scroll ">
                      {searchResult.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center gap-9 py-4 border-b-2"
                        >
                          <img
                            className="w-20"
                            src={item.thumbnail}
                            alt="photo"
                          />
                          <h3 className="text-xl font-semibold">
                            {item.title}
                          </h3>
                        </div>
                      ))}
                    </div>
                  )}

                  <button className="h-10 w-12 bg-rose-500">
                    <CiSearch className="flex mx-auto text-2xl" />
                  </button>
                </div>
              </li>
            </ul>
          </div>

          <div onClick={handleManu} className="text-xl px-4 lg:hidden">
            {manuShaw === true ? <GiCrossedSabres /> : <FaBarsStaggered />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
