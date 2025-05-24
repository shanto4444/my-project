import React from "react";
import img2 from "../assets/about2.png";
import img3 from "../assets/about3.png";
import img4 from "../assets/about4.png";
import img5 from "../assets/about5.png";

const AboutCon2 = () => {
  return (
    <section className="py-14 bg-purple-50">
      <div className="container mx-auto">
        <div className="">
          <h1 className="text-[35px] font-serif text-center font-bold pt-3 pb-8">
            Our Furniture
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="flex flex-col justify-center items-center border-2 p-1">
              <img className="pt-10 pb-10" src={img2} alt="have a photo" />
              <h3 className="text-center text-xl font-bold pb-6">
                Free Delivary
              </h3>
              <p className="text-center mx-8 pb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ut
                quod ea, rem delectus qui facilis laborum dolorum cum in.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center border-2 p-1">
              <img className="pt-10 pb-10" src={img3} alt="have a photo" />
              <h3 className="text-center text-xl font-bold pb-6">
                100% Cash Back
              </h3>
              <p className="text-center mx-8 pb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ut
                quod ea, rem delectus qui facilis laborum dolorum cum in.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center border-2 p-1">
              <img className="pt-10 pb-10" src={img4} alt="have a photo" />
              <h3 className="text-center text-xl font-bold pb-6">
                Quality Products
              </h3>
              <p className="text-center mx-8 pb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ut
                quod ea, rem delectus qui facilis laborum dolorum cum in.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center border-2 p-1">
              <img className="pt-10 pb-10" src={img5} alt="have a photo" />
              <h3 className="text-center text-xl font-bold pb-6">
                24/7 Support
              </h3>
              <p className="text-center mx-8 pb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ut
                quod ea, rem delectus qui facilis laborum dolorum cum in.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCon2;
