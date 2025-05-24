import React from "react";
import img from "../assets/photo1.png";
const UniFeature = () => {
  return (
    <section className="bg-purple-100">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="w-[50%] pl-20">
            <img className="w-full" src={img} alt="" />
          </div>
          <div className="pr-[200px] w-[50%]">
            <h2 className="text-[30px] font-semibold pr-[100px] pb-8">
              Unique Features latest and tending products
            </h2>{" "}
            <p className="text-[18px] pb-3">
              this is something to write about product
            </p>
            <p className="text-[18px] pb-3">
              this is something to write about product
            </p>
            <p className="text-[18px] pb-8">
              this is something to write about product
            </p>
            <div className="flex items-center gap-8 ">
              <button className="bg-orange-600 py-4 px-12 text-white text-[20px]">
                Add to cat
              </button>
              <div className="">
                <p className="text-[22px] font-bold pb-3">
                  B&B italian products
                </p>
                <p className="font-normal">$16546</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniFeature;
