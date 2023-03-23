import one from "../assets/AboutUs/1.png";
import two from "../assets/AboutUs/2.png";
import three from "../assets/AboutUs/3.png";
import four from "../assets/AboutUs/Title.png";

const AboutUs = ({ heading, subheading }) => {
  return (
    <div className="container mx-auto mt-10 flex px-2 sm:px-5 md:flex-row flex-col items-center justify-end bg-[url('/src/assets/AboutUs/aboutUsBG.png')] bg-contain bg-no-repeat bg-right-top bg-opacity-20 h-full md:h-[100vh] p-2">
      {/* IMAGES CONTAINER */}
      <div className="w-1/2 flex justify-center">
        <div className="rotate-45 flex flex-wrap gap-0 justify-center items-center border-4 border-red-500 w-[400px] h-[400px]">
          <div className="flex gap-2 md:gap-6 border-4 border-green-500 w-[400px] h-[200px]">
            <img src={one} alt="one" className="w-[400px] h-[200px]" />
          </div>
          <div className="flex gap-2 md:gap-0">
            <div className="hidden md:flex flex-col border-4 border-yellow-500 h-[200px] w-[250px]">
              <img src={four} alt="four" className="w-[250px]" />
            </div>
            <div className="hidden md:flex flex-col gap-0 border-4 border-violet-500 h-[200px] w-[150px]">
              <img src={two} alt="two" className="w-[150px] h-[100px]" />
              <img src={three} alt="three" className="w-[150px] h-[100px]" />
            </div>
          </div>
        </div>
      </div>
      {/* TEXT CONTAINER */}
      <div className="gap-10 p-3 flex flex-col items-start md:w-1/2">
        <p className="font-semibold text-left text-black m-0 text-[42px] sm:text-[52px] leading-[normal] px-6">
          {heading}
        </p>
        <p className="text-xl tracking-wide font-normal text-left m-0 text-[rgba(82,82,91,1)] px-6 border-l-4 border-gray-400 leading-10">
          {subheading}
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
