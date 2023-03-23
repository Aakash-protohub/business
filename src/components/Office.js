import Title from "../assets/Office/Title.png";
import Map from "../assets/Office/Map.png";
import Phone from "../assets/Office/call.png";
import Mail from "../assets/Office/mail.png";
import Location from "../assets/Office/android-pin.png";

const Office = ({phone,mail,address}) => {
  return (
    <div className="relative w-full p-3 md:p-8 flex flex-col gap-7 justify-around">
      <div className="border-2 border-cyan-300 w-full sm:w-[95%] mx-auto p-5 gap-3 rounded-3xl flex flex-col items-center justify-center">
        <h1 className="text-2xl text-[#006064] font-bold">We Believe In</h1>
        <p className="text-lg text-black font-normal">“ Creativity is Contagious, Pass it on” - Albert Einstein.</p>
      </div>
      <div className="flex gap-3 md:mt-10 flex-col md:flex-row">
        <div className="flex flex-col gap-5 md:gap-12 w-full md:w-1/2 justify-center">
          <img src={Title} alt="title" width="333" />
          <div className="border-2 border-cyan-300 w-[90%] mx-auto p-5 gap-3 rounded-xl flex flex-col items-start justify-center">
            <h1 className="text-lg text-black font-bold m-2">Head Quarter</h1>
            <div className="flex flex-wrap gap-4">
              <p className="flex items-center justify-center m-2">
                <img src={Phone} alt="phone" className="mx-3" /> {phone}
              </p>
              <p className="flex items-center justify-center m-2">
                <img src={Mail} alt="phone" className="mx-3" /> {mail}
              </p>
              <p className="flex items-center justify-center m-2">
                <img src={Location} alt="phone" className="mx-3" /> {address}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full md:w-1/2 md:my-4">
          <img src={Map} alt="map" width="500" />
        </div>
      </div>
    </div>
  );
};

export default Office;
