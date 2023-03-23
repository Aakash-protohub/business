import one from "../..//assets/Home/1.png";
import two from "../..//assets/Home/2.png";
import three from "../..//assets/Home/3.png";
import four from "../..//assets/Home/4.png";
import five from "../..//assets/Home/5.png";
import six from "../..//assets/Home/6.png";

const WhyOurPlatform = ({ style, heading, description, onClickEnroll }) => {
  return (
    <div
      className="container mx-auto flex px-2 sm:px-5 md:flex-row flex-col items-center justify-center"
      style={style}
    >
      {/* IMAGES CONTAINER */}
      <div className="flex flex-wrap gap-6 p-5 md:w-2/5 justify-center items-center">
        <div className="hidden md:flex flex-col gap-2 md:gap-6 ">
          <img src={one} alt="one" />
          <img src={two} alt="two" />
        </div>
        <img src={three} alt="three" className="w-[333px]" />
        <img src={four} alt="four" className="m-w-[333px]" />
        <div className="hidden md:flex flex-row gap-2 md:gap-6">
          <img src={five} alt="one" className="" />
          <img src={six} alt="two" className="" />
        </div>
      </div>
      <div className="gap-10 p-3 flex flex-col items-start md:w-3/5 lg:w-[720px]">
        <p className="font-semibold text-left text-white m-0 md:w-[600px] text-[42px] sm:text-[52px] leading-[normal]">
          {heading}
        </p>
        <p className="text-lg font-normal text-left m-0 md:w-[608px] leading-[30px] text-[rgba(82,82,91,1)]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default WhyOurPlatform;
