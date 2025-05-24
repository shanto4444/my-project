import React from "react";
import chair from "../assets/dchair.png";
import group from "../assets/Group 162.png";
import group1 from "../assets/image 1174.png";

const DiscountItem = () => {
  return (
    <section className="py-14">
      <div className="container mx-auto">
        <div>
          <h2 className="text-[30px] font-bold text-center pb-6">
            Discount Item
          </h2>
          <div>
            <ul className="text-sm font-semibold flex gap-14 justify-center">
              <li>Wood Chair</li>
              <li>Plastic Chair</li>
              <li>Sofa Chair</li>
            </ul>
          </div>
          <div className="flex gap-14 justify-center items-center">
            <div className="w-[60%] pl-28">
              <h1 className="text-[30px] font-bold pb-6">
                20% discount all products
              </h1>
              <h4 className="text-[18px] font-normal text-red-500 font-semibold pb-4">
                Eams Sofa Compect
              </h4>
              <p className="text-[17px] font-normal pb-4 pr-32">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
                nemo aut reiciendis incidunt recusandae explicabo reiciendis
                incidunt recusandae explicabo.
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 text-[17px] font-normal">
                <p className="pb-2">* Meterials expose like metrals</p>
                <p className="pb-2">* Meterials expose like metrals</p>
                <p className="pb-2">* Meterials expose like metrals</p>
                <p className="pb-2">* Meterials expose like metrals</p>
              </div>
            </div>
            <div className="w-[40%] pr-12 h-[360px]">
              <img className="w-full" src={chair} alt="have a picture" />
            </div>
          </div>
          <button className="bg-orange-500 text-white py-2 px-3 font-bold ml-28 mb-5">
            Shop now
          </button>
        </div>
        <h1 className="text-[30px] text-center font-bold pt-11 pb-14">
          Top Catagori
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-4">
          <div className="flex flex-col items-center justify-center ">
            <img
              className="w-[200px] h-[200px] rounded-full bg-slate-200"
              src={chair}
              alt="have a photo"
            />
            <h3 className="font-normal font-semibold pt-4 pb-2">
              Mini LCW Chair
            </h3>
            <p className="font-normal font-semibold">$3546</p>
          </div>
          <div className="flex flex-col items-center justify-center ">
            <img
              className="w-[200px] h-[200px] rounded-full bg-slate-200"
              src={chair}
              alt="have a photo"
            />
            <h3 className="font-normal font-semibold pt-4 pb-2">
              Mini LCW Chair
            </h3>
            <p className="font-normal font-semibold">$3546</p>
          </div>
          <div className="flex flex-col items-center justify-center ">
            <img
              className="w-[200px] h-[200px] rounded-full bg-slate-200"
              src={chair}
              alt="have a photo"
            />
            <h3 className="font-normal font-semibold pt-4 pb-2 ">
              Mini LCW Chair
            </h3>
            <p className="font-normal font-semibold">$3546</p>
          </div>
          <div className="flex flex-col items-center justify-center ">
            <img
              className="w-[200px] h-[200px] rounded-full bg-slate-200"
              src={chair}
              alt="have a photo"
            />
            <h3 className="font-normal font-semibold pt-4 pb-2">
              Mini LCW Chair
            </h3>
            <p className="font-normal font-semibold">$3546</p>
          </div>
        </div>
        <div className="py-14">
          <img src={group} alt="have a image" />
        </div>
        <div className=" flex items-center justify-center">
          <img src={group1} alt="have a photo" />
        </div>
      </div>
    </section>
  );
};

export default DiscountItem;
