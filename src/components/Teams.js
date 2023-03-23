// import blueRectangle from "../assets/Teams/blueRectangle.png";
import teamVision from "../assets/Teams/teamVision.png";

const Teams = ({ vision }) => {
  return (
    <div className="container ml-auto mt-10 flex px-2 gap-6 sm:px-5 md:flex-row flex-col items-start justify-end bg-[url('/src/assets/Teams/teamBanner.png')] bg-no-repeat bg-right-top bg-opacity-20 h-full md:h-[100vh] w-full p-2 bg-[length:100%_95%]">
      <div className="w-full md:w-2/5">
        <div className="p-10 bg-[url('/src/assets/Teams/blueRectangle.png')] bg-[length:300px_300px] md:bg-[length:450px_450px] bg-no-repeat bg-center opacity-80 flex items-center justify-center">
          <img src={teamVision} alt="heading" className="w-[250px] md:w-[400px] h-[250px] md:h-[400px]"/>
        </div>
      </div>
      <div className="w-full md:w-3/5 flex flex-wrap gap-8 justify-around my-2 md:my-7">
        <p className="font-normal text-left text-black m-2 md:m-5 md:p-5 text-[16px] sm:text-[22px] leading-[normal]">
          {vision}
        </p>
      </div>
    </div>
  );
};

export default Teams;
