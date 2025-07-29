import React, { useContext } from "react";
import { IoStar, IoStarHalf } from "react-icons/io5";
import { FaRegHeart, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { apiData } from "./ContexApi";
const ProductDetailsFullPage = () => {
  let product = useParams();
  let singleProduct = product.id;
  let data = useContext(apiData);
  let single = data.filter((item) => item.id == singleProduct);

  return (
    <>
      <section className="py-8">
        <div className="container mx-auto">
          <div className="">
            {single.map((item) =>
              item?.images.map((image) => (
                <div className="flex items-center gap-2 w-[80px] h-[150px] ">
                  <img
                    className="w-[100px]  flex   gap-2 "
                    src={image}
                    alt="image"
                  />
                </div>
              ))
            )}

            {single.map((item) => (
              <div className="flex gap-16">
                <div className="bg-slate-200 flex items-center justify-center className='w-[45%]'">
                  <img className="" src={item.thumbnail} alt="imge" />
                </div>

                <div className="w-[52%]">
                  <div className="space-y-9">
                    <h1 className="text-3xl font-semibold">{item.title}</h1>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </div>
                      <h3>(22)</h3>
                    </div>
                    <div className="flex gap-9">
                      <p className="">{item.price}</p>
                      <p className="">{item.price}</p>
                    </div>
                    <h3>Color:</h3>
                    <p>{item.description}</p>
                  </div>
                  <div className="space-y-9 pt-7">
                    <h2 className="text-3xl font-semibold ml-16 flex items-center gap-5">
                      Add to Cart <FaRegHeart />
                    </h2>
                    <h3 className="text-xl font-bold">
                      Category: {item.category}
                    </h3>
                    <h3 className="text-xl font-bold">Tags:</h3>
                    <div className="flex items-center gap-7">
                      <h2 className="text-xl font-bold">Share</h2>
                      <div className="flex items-center gap-2">
                        <FaFacebook />
                        <FaInstagram />
                        <FaTwitter />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className="flex items-center gap-16 text-2xl font-bold">
              <h2>Descriptions</h2>
              <h2>Additionalinformation</h2>
              <h2>Reviews</h2>
              <h2>videos</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailsFullPage;
