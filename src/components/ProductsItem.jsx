import React, { useContext, useEffect, useState } from "react";
import { TbPointFilled } from "react-icons/tb";
import img from "../assets/image 9.png";
import img1 from "../assets/image 1174.png";
import { GrChapterPrevious, GrChapterNext } from "react-icons/gr";
import { GoTriangleDown } from "react-icons/go";
import { apiData } from "./ContexApi";

const ProductsItem = () => {
  let data = useContext(apiData);
  let [category, setCategory] = useState([]);

  useEffect(() => {
    setCategory([...new Set(data.map((item) => item.category))]);
  }, [data]);

  let [categoryItems, setCategoryItems] = useState([]);

  const handleCategoryProducts = (cat) => {
    let filterProducts = data.filter((item) => item.category === cat);
    setCategoryItems(filterProducts);
  };
  console.log(categoryItems);
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="flex gap-16">
          <div className="w-[20%] ">
            <div>
              <h1 className=" text-2xl flex gap-2 items-center font-bold ">
                Shop by Category <GoTriangleDown />
              </h1>
              <ul className="text-xl space-y-4 pt-5">
                {category.map((categories) => (
                  <li
                    onClick={() => handleCategoryProducts(categories)}
                    className="capitalize py-3 border-b-2"
                  >
                    {categories}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className=" text-2xl flex gap-2 items-center font-bold ">
                Shop by Pricing <GoTriangleDown />
              </h2>
              <ul className="text-xl space-y-4 pt-5">
                <li className="capitalize py-3 border-b-2">00.01-100.00</li>
              </ul>
            </div>
          </div>
          <div className="w-[75%] grid grid-cols-1 lg:grid-cols-3 gap-3 ">
            {categoryItems.length > 0
              ? categoryItems.map((item) => (
                  <div className="shadow-lg flex flex-col justify-center gap-5 items-center pb-5 bg-slate-100 ">
                    <img
                      className=" px-9"
                      src={item.thumbnail}
                      alt="have a photo"
                    />
                    <h3 className="text-[18px] font-serif font-bold">
                      {item.title}...
                    </h3>
                    <p className="flex gap-2">
                      <TbPointFilled className="text-red-500 text-xl" />
                      <TbPointFilled className="text-yellow-500 text-xl" />
                      <TbPointFilled className="text-green-500 text-xl" />
                    </p>
                    <div className="flex gap-10">
                      <p className="font-normal">{item.price}</p>
                      <p className="line-through font-normal">{item.price}</p>
                    </div>
                  </div>
                ))
              : data.map((item) => (
                  <div className="shadow-lg flex flex-col justify-center gap-5 items-center pb-5 bg-slate-100 ">
                    <img
                      className=" px-9"
                      src={item.thumbnail}
                      alt="have a photo"
                    />
                    <h3 className="text-[18px] font-serif font-bold">
                      {item.title}...
                    </h3>
                    <p className="flex gap-2">
                      <TbPointFilled className="text-red-500 text-xl" />
                      <TbPointFilled className="text-yellow-500 text-xl" />
                      <TbPointFilled className="text-green-500 text-xl" />
                    </p>
                    <div className="flex gap-10">
                      <p className="font-normal">{item.price}</p>
                      <p className="line-through font-normal">{item.price}</p>
                    </div>
                  </div>
                ))}
          </div>
        </div>

        <div className="flex gap-2 justify-center text-[#3F519e77] pt-10">
          <button className="px-4 py-2 border-2 text-base">Previous</button>
          <button className="px-4 py-2 border-2 text-base">1</button>
          <button className="px-4 py-2 border-2 text-base">2</button>
          <button className="px-4 py-2 border-2 text-base">3</button>
          <button className="px-4 py-2 border-2 text-base">4</button>
          <button className="px-4 py-2 border-2 text-base">5</button>
          <button className="px-4 py-2 border-2 text-base">6</button>
          <button className="px-4 py-2 border-2 text-base">7</button>
          <button className="px-4 py-2 border-2 text-base">8</button>
          <button className="px-4 py-2 border-2 text-base">9</button>
          <button className="px-4 py-2 border-2 text-base">Next</button>
        </div>
        <div className="flex flex-col items-center py-16">
          <img src={img1} alt="have a photo" />
        </div>
      </div>
    </section>
  );
};

export default ProductsItem;
