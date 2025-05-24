import React from "react";
import Reuseable from "./Reuseable";
import photo from "../assets/person.jpg";
import photo1 from "../assets/hero.png";
const Course = () => {
  return (
    <div>
      <Reuseable
        img={photo}
        heading="this is a title of paragraph"
        description="my name is sheikh shanto. I am a sincere person. my favorite color is white and black because white is the symbol purity and clearity and black is the symbol of bitterness "
      />

      <Reuseable
        img={photo1}
        heading="my favorite person"
        description=" my favorite color is white and black because white is the symbol purity and clearity and black is the symbol of bitterness "
      />
    </div>
  );
};

export default Course;
