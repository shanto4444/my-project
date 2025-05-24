import React from "react";
import img1 from "../assets/Frame 3.png";
import img2 from "../assets/Frame 4.png";
import img3 from "../assets/Frame 3 (1).png";

const LatestLast = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div>
          <h1 className="text-[30px] font-bold text-center pb-12">
            Leatest blog
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 justify-between">
            <div className="flex flex-col ">
              <img src={img1} alt="have a photo" />
              <div className="flex gap-28 pt-6 pb-5">
                <p className="font-normal">Sobar Ali</p>
                <p className="font-normal">20 Augest,2022</p>
              </div>
              <h2 className="text-[22px] text-red-400 font-semibold pb-2">
                Top essential treads in 2021
              </h2>
              <p className="text-[18px] font-normal pr-20">
                More off this less hello samlande lied much over tightly circa
                horse taped mightly
              </p>
              <p className="text-[18px] font-semibold underline py-8">
                Read more
              </p>
            </div>
            <div className="flex flex-col ">
              <img src={img2} alt="have a photo" />
              <div className="flex gap-28 pt-6 pb-5">
                <p className="font-normal">Sobar Ali</p>
                <p className="font-normal">20 Augest,2022</p>
              </div>
              <h2 className="text-[22px] text-red-400 font-semibold pb-2">
                Top essential treads in 2021
              </h2>
              <p className="text-[18px] font-normal pr-20">
                More off this less hello samlande lied much over tightly circa
                horse taped mightly
              </p>
              <p className="text-[18px] font-semibold underline py-8">
                Read more
              </p>
            </div>
            <div className="flex flex-col ">
              <img src={img3} alt="have a photo" />
              <div className="flex gap-28 pt-6 pb-5">
                <p className="font-normal">Sobar Ali</p>
                <p className="font-normal">20 Augest,2022</p>
              </div>
              <h2 className="text-[22px] text-red-400 font-semibold pb-2">
                Top essential treads in 2021
              </h2>
              <p className="text-[18px] font-normal pr-20">
                More off this less hello samlande lied much over tightly circa
                horse taped mightly
              </p>
              <p className="text-[18px] font-semibold underline py-8">
                Read more
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestLast;
