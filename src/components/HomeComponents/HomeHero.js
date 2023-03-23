
//comopnents import
import Button from "../Global/Button";

export const HomeHero = ({ backgroundImage, subheading, heading, descrition, onClicks }) => {
  return (
    <div className="relative w-full" >
      <img
        src={backgroundImage}
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-black bg-opacity-70 h-[660px] w-full flex items-center">
        <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 w-full">
          <div className="flex flex-col items-center justify-between xl:flex-row ">
            <div className="gap-6 flex flex-col w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12 ">
              <p className="font-bold text-left text-white m-0 h-[22px] w-[177px] text-[17.6px] leading-[26.399999618530273px]">
                {subheading}
              </p>

              <p className="font-semibold text-left text-white m-0 h-[117px] sm:w-[505px] text-[26px] sm:text-[40px] leading-[normal]">
               {heading}
              </p>

              <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
              {descrition}
              </p>
              <div className="flex items-start text-white text-center font-semibold gap-7">
                <Button type="primary" text="Our Services" onClick={onClicks[0]} stylecustom="btnAnimation"/>
                <Button type="outline" text="Learn More" onClick={onClicks[1]} stylecustom="btnAnimation"/>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};