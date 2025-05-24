import React from "react";
import img1 from "../assets/about1.png";

const AboutCon1 = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="flex gap-12 items-center justify-center">
          <div className="w-[50%]">
            <img className="w-full" src={img1} alt="have a photo" />
          </div>
          <div className="w-[50%]">
            <h1 className="text-[35px] font-bold font-serif ">
              Know About Our Ecommerce Business, History
            </h1>
            <p className="text-[20px] font-sans pt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              rerum blanditiis minima praesentium suscipit accusantium
              voluptatum placeat adipisci? Necessitatibus quae pariatur corporis
              debitis explicabo porro iste obcaecati est rerum itaque.voluptatum
              placeat adipisci? Necessitatibus quae pariatur corporis debitis
              explicabo porro iste obcaecati est rerum itaque
            </p>
            <button className="text-white font-[18px] font-semibold rounded-xl mt-20 bg-orange-500 py-4 px-12">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCon1;
