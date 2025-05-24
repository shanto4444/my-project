import React from "react";
import img6 from "../assets/about6.png";
const AboutCon3 = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="w-[25%] mx-auto">
          <h1 className="text-center text-[35px] font-serif font-bold pb-8">
            Our Clients Story!
          </h1>
          <div className="flex flex-col justify-center items-center ">
            <img className="py-2" src={img6} alt="have a photo" />
            <h4 className="text-center font-bold text-[22px] pb-1">
              Ahmed Shanto
            </h4>
            <p className="text-center font-normal font-semibold pb-4">
              ceo at lazy party
            </p>
            <p className="text-center font-normal ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
              praesentium animi, voluptas exercitationem et architecto aut odio,
              magni quas fugit tempore, sint soluta
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCon3;
