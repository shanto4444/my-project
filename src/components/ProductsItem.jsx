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

  let [catShaw, setCatShaw] = useState(false);
  const handleCatShaw = () => {
    setCatShaw(!catShaw);
  };
  let [priceShaw, setPriceShaw] = useState(false);
  const handlePriceShaw = () => {
    setPriceShaw(!priceShaw);
  };
  let [priceItem, setPriceItem] = useState([]);

  const handleCategoryPrice = (low, hight) => {
    let filterPrice = data.filter(
      (item) => item.price > low && item.price <= hight
    );
    setPriceItem(filterPrice);
  };

  let [currentPage, setCurrentPage] = useState(1);
  let [perPage, setPerPage] = useState(30);
  let lastItemIndex = currentPage * perPage;
  let firstItemIndex = lastItemIndex - perPage;
  let totalPages = Math.ceil(data.length / perPage);
  let currentPageProduct = data.slice(firstItemIndex, lastItemIndex);
  let pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const handleNextPage = () => {
    if (currentPage !== totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handlePage = (pagesNumber) => {
    setCurrentPage(pagesNumber);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div>
          <div className="flex justify-between items-center">
            <div className="flex flex-col justify-center">
              <h1 className="text-[32px] font-bold font-serif">
                Ecommerce Accesory and Fasion Item
              </h1>
              <h5 className="text-[12px] font-sans ">about some products</h5>
            </div>
            <div className="flex gap-3">
              <p className="text-[16px] font-sans">per page:</p>
              <input className="border outline-none pl-4" type="text" />
            </div>
            <div className="flex gap-3">
              <p className="text-[16px] font-sans">sort by:</p>
              <select className="border outline-none" name="" id="">
                <option value="good">good</option>
                <option value="better">better</option>
                <option value="best">best</option>
              </select>
            </div>
            <div className="flex gap-3">
              <p className="flex items-center gap-6">
                view:
                <TfiLayoutGrid2Alt className="text-[12px]" />
                <TfiList className="text-[18px]" />
              </p>
              <input type="text" className="border outline-none pl-3" />
            </div>
          </div>

          <div className="flex gap-16">
            <div className="w-[20%]  ">
              <div className="pb-7">
                <h1
                  onClick={handleCatShaw}
                  className=" text-2xl flex gap-2 items-center font-bold cursor-pointer"
                >
                  Shop by Category <GoTriangleDown />
                </h1>

                {catShaw && (
                  <ul className="text-xl space-y-4 pt-5">
                    {category.map((categories) => (
                      <li
                        onClick={() => handleCategoryProducts(categories)}
                        className="capitalize py-3 border-b-2 cursor-pointer"
                      >
                        {categories}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div>
                <h2
                  onClick={handlePriceShaw}
                  className=" text-2xl flex gap-2 items-center font-bold cursor-pointer"
                >
                  Shop by Pricing <GoTriangleDown />
                </h2>
                {priceShaw && (
                  <ul className="text-xl space-y-4 pt-5">
                    <li
                      onClick={() => handleCategoryPrice(0, 100)}
                      className="capitalize py-3 border-b-2 cursor-pointer"
                    >
                      $0.00 - $100.00
                    </li>
                    <li
                      onClick={() => handleCategoryPrice(100.01, 200)}
                      className="capitalize py-3 border-b-2 cursor-pointer"
                    >
                      $100.01 - $200.00
                    </li>
                    <li
                      onClick={() => handleCategoryPrice(200.01, 500)}
                      className="capitalize py-3 border-b-2 cursor-pointer"
                    >
                      $200.01 - $500.00
                    </li>
                    <li
                      onClick={() => handleCategoryPrice(500.01, 100000)}
                      className="capitalize py-3 border-b-2 cursor-pointer"
                    >
                      $500.01 - $100000.00
                    </li>
                  </ul>
                )}
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
                : priceItem.length > 0
                ? priceItem.map((item) => (
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
                : currentPageProduct.map((item) => (
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
            <button
              onClick={handlePreviousPage}
              className="px-4 py-2 border-2 text-base text-black font-semibold"
            >
              Previous
            </button>
            {pages.map((pagesNumber) => (
              <button
                onClick={() => handlePage(pagesNumber)}
                className={`"px-4 py-2 border-2 text-base text-black font-semibold" ${
                  pagesNumber === currentPage ? "bg-gray-900 text-white" : ""
                }`}
              >
                {pagesNumber}
              </button>
            ))}
            <button
              onClick={handleNextPage}
              className="px-4 py-2 border-2 text-base text-black font-semibold"
            >
              Next
            </button>
          </div>
          <div className="flex flex-col items-center py-16">
            <img src={img1} alt="have a photo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsItem;
