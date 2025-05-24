import React from "react";
import img2 from "../assets/photo1.png";
import img3 from "../assets/Hekto.png";
import img62 from "../assets/image 1162.png";
import img61 from "../assets/image 1161.png";
const TrendingProduct = () => {
  return (
    <section className="pb-24">
      <div className="container mx-auto">
        <div className="">
          <h2 className="text-[35px] font-bold text-center pt-16">
            Trending Products
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 py-20">
            <div className="bg-gray-100 p-5">
              <img
                className="w-full flex items-center justify-center"
                src={img2}
                alt="have a picture"
              />
              <h3 className="text-center py-6 text-[20px] font-semibold">
                Comfort Handy Craft
              </h3>
              <div className="flex justify-between font-normal">
                <p>$54656</p>
                <p className="line-through">$54656</p>
              </div>
            </div>
            <div className="bg-gray-100 p-5">
              <img
                className="w-full flex items-center justify-center"
                src={img2}
                alt="have a picture"
              />
              <h3 className="text-center py-6 text-[20px] font-semibold">
                Comfort Handy Craft
              </h3>
              <div className="flex justify-between font-normal">
                <p>$54656</p>
                <p className="line-through">$54656</p>
              </div>
            </div>
            <div className="bg-gray-100 p-5">
              <img
                className="w-full flex items-center justify-center"
                src={img2}
                alt="have a picture"
              />
              <h3 className="text-center py-6 text-[20px] font-semibold">
                Comfort Handy Craft
              </h3>
              <div className="flex justify-between font-normal">
                <p>$54656</p>
                <p className="line-through">$54656</p>
              </div>
            </div>
            <div className="bg-gray-100 p-5">
              <img
                className="w-full flex items-center justify-center"
                src={img2}
                alt="have a picture"
              />
              <h3 className="text-center py-6 text-[20px] font-semibold">
                Comfort Handy Craft
              </h3>
              <div className="flex justify-between font-normal">
                <p>$54656</p>
                <p className="line-through">$54656</p>
              </div>
            </div>
          </div>
        </div>
        {/* <p>start new div</p> */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5  h-80">
          <div className="bg-slate-200 relative ">
            <h3 className="text-[25px] font-semibold pl-3 pt-7">
              45% off in all products
            </h3>
            <p className="text-red-500 underline pl-3">shop now</p>
            <div className="absolute right-10 bottom-16">
              <img className="w-full" src={img62} alt="have a image" />
            </div>
          </div>
          <div className="bg-slate-200 relative">
            <h3 className="text-[25px] font-semibold pl-3 pt-7">
              45% off in all products
            </h3>
            <p className="text-red-500 underline pl-3">shop now</p>
            <div className="absolute right-10 bottom-16">
              <img className="w-full" src={img61} alt="have a image" />
            </div>
          </div>
          <div className="bg-gray-50 grid grid-rows-1 lg:grid-rows-3 gap-3">
            <div className="flex items-center gap-10">
              <img
                className="h-28 bg-slate-300 pl-2"
                src={img2}
                alt="have a photo"
              />
              <div>
                <h3 className="text-[25px] font-semibold">
                  Executive seat chair
                </h3>
                <p className="line-through font-normal">$58778</p>
              </div>
            </div>
            <div className="flex items-center gap-10">
              <img
                className="h-28 bg-slate-300 pl-2"
                src={img2}
                alt="have a photo"
              />
              <div>
                <h3 className="text-[25px] font-semibold">
                  Executive seat chair
                </h3>
                <p className="line-through font-normal">$58778</p>
              </div>
            </div>
            <div className="flex items-center gap-10">
              <img
                className="h-28 bg-slate-300 pl-2"
                src={img2}
                alt="have a photo"
              />
              <div>
                <h3 className="text-[25px] font-semibold">
                  Executive seat chair
                </h3>
                <p className="line-through font-normal">$58778</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingProduct;
