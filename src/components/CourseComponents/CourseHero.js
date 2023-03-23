
//comopnents import
import Button from "../Global/Button";

export const CourseHero = ({ backgroundImage, heading, description, onClicks }) => {
  return (
    <div className="relative w-full" >
      <img
        src={backgroundImage}
        className="absolute inset-0 object-cover w-full h-full"
        alt="background"
      />
      <div className="relative bg-black bg-opacity-70 h-[660px] w-full flex items-center">
        <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 w-full">
          <div className="flex flex-col items-center justify-between xl:flex-row ">
            <div className="gap-y-5 flex flex-col w-full max-w-3xl mb-10 xl:mb-0 xl:pr-16 xl:w-7/12 ">

              <p className="gap-7 font-semibold text-left text-white m-0  w-[505px] text-[40px] leading-[normal]">
               {heading}
              </p>

              <p className="max-w-2xl mb-4 text-base text-gray-400 md:text-lg">
              {description}
              </p>
              <div className="flex items-start text-white text-center font-semibold gap-7">
                <Button text="Enroll Now" onClick={onClicks} stylecustom={"btnAnimation"}/>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};