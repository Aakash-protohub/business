import one from "../assets/Clients/1.png";
import two from "../assets/Clients/2.png";
import three from "../assets/Clients/3.png";
import four from "../assets/Clients/4.png";
import five from "../assets/Clients/5.png";
import six from "../assets/Clients/6.png";
import leftArrow from "../assets/leftArrow.png";
import rightArrow from "../assets/rightArrow.png"

const Clients = () => {
  return (
    <div className="relative w-full h-full p-8 flex flex-col md:flex-row justify-around gap-8">
      <div className=" w-full md:w-3/4 order-2 md:order-1 flex flex-wrap gap-8 justify-around">
        <img src={one} alt="one" className="w-[300px] h-[300px]" />
        <img src={two} alt="two" className="w-[300px] h-[300px]" />
        <img src={three} alt="three" className="w-[300px] h-[300px]" />
        <img src={four} alt="four" className="w-[300px] h-[300px]" />
        <img src={five} alt="five" className="w-[300px] h-[300px]" />
        <img src={six} alt="six" className="w-[300px] h-[300px]" />
      </div>
      <div className="w-full md:w-1/4 order-1 flex flex-col gap-10">
        <p className="font-semibold text-left text-[#0D47A1] m-0 text-[46px] sm:text-[72px] leading-[normal]">
          Our Clients
        </p>
        <div className="flex gap-6 h-full items-center justify-center">
          <img src={leftArrow} alt="leftArrow" className="w-[50px] h-[50px]" />
          <img src={rightArrow} alt="righttArrow" className="w-[50px] h-[50px]" />
        </div>
      </div>
    </div>
  );
};

export default Clients;
