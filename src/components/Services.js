import leftArrow from "../assets/leftArrow.png";
import rightArrow from "../assets/rightArrow.png";
import Slider from "./Slider";

const Services = () => {
  const products = [
    {
      img: "https://www.aesop.com/u1nb1km7t5q7/4DzrtKfI5r4TCtQkmdZLss/500786f885d52d7170f41e4124fbc8f1/Aesop_Kits_Gift_Kits_2021-22_Industrious_GL_Web_Large_1584x962px.png",
      content: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content.",
    },
    {
      img: "https://www.aesop.com/u1nb1km7t5q7/4DzrtKfI5r4TCtQkmdZLss/500786f885d52d7170f41e4124fbc8f1/Aesop_Kits_Gift_Kits_2021-22_Industrious_GL_Web_Large_1584x962px.png",
      content: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content.",
    },
    {
      img: "https://www.aesop.com/u1nb1km7t5q7/4DzrtKfI5r4TCtQkmdZLss/500786f885d52d7170f41e4124fbc8f1/Aesop_Kits_Gift_Kits_2021-22_Industrious_GL_Web_Large_1584x962px.png",
      content: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content.",
    },
    {
      content: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content.",
    },
    {
      content: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content.",
    },
    
  ];
  return (
    <div className="container mx-auto mt-10 flex px-2 sm:px-5 md:flex-row flex-col items-center justify-end bg-[url('/src/assets/Services/ServiceBg.png')] bg-no-repeat bg-opacity-20 min-h-screen md:h-[115vh] w-full bg-[length:100%_100vh]">
      <div className="w-full md:w-3/4 order-2 md:order-1 flex flex-wrap gap-8 justify-around">
        <Slider products={products} />
      </div>
      <div className="w-full md:w-1/4 order-1  flex flex-col gap-10">
        <p className="font-semibold text-left text-[#0D47A1] m-0 text-[46px] sm:text-[72px] leading-[normal]">
          Our Services
        </p>
        <div className="flex gap-6 h-full items-center justify-center">
          <img src={leftArrow} alt="leftArrow" className="w-[50px] h-[50px]" />
          <img
            src={rightArrow}
            alt="righttArrow"
            className="w-[50px] h-[50px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
