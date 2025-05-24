import React from "react";
import hero1 from "../assets/hero.png";
const Hero = () => {
  return (
    <section className="bg-purple-100 py-5 overflow-x-hidden">
      <div className="container mx-auto px-4">
        <div className="  items-center pb-8 flex flex-col-reverse lg:flex-row ">
          <div className="lg:w-[60%] mx-auto py-8 flex flex-col items-center lg:items-start ">
            <div className="">
              <h4 className="text-red-800 font-serif font-semibold  pb-3 text-center lg:text-start text-2xl lg:text-sm">
                Best furniture for your castle...
              </h4>
              <h1 className="text-5xl text-black  font-serif  lg:pr-40 pb-5 text-center lg:text-start ">
                New Furniture Collection Treands in 2021
              </h1>
              <p className="text-['#8a8fb9'] font-serif text-sm lg:pr-64 pb-5 text-center lg:text-start">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
                saepe natus nostrum praesentium sunt iure dicta alias?
              </p>
            </div>
            <button className="bg-rose-500 py-3 px-5 rounded-xl text-white font-semibold">
              shop now
            </button>
          </div>
          <div className="lg:w-[40%] mx-auto lg:flex lg:items-center lg:justify-center">
            <img className="w-[100%]" src={hero1} alt="hero image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
