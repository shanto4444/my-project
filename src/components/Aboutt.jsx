import AboutCon1 from "./AboutCon1";
import AboutCon2 from "./AboutCon2";
import AboutCon3 from "./AboutCon3";
import Common from "./Common";

const Aboutt = () => {
  return (
    <div>
      <Common
        pageName="About Page"
        pageDtails1="Home."
        pageDtails2="Page."
        pageDtails3="About"
      />
      <AboutCon1 />
      <AboutCon2 />
      <AboutCon3 />
    </div>
  );
};

export default Aboutt;
