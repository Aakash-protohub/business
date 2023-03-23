export const Grids = ({ box1,box2,box3,box4,box5 }) => {
  return (
    <div className="container mx-auto px-5">
      <div className="grid grid-rows-none md:grid-cols-3 py-4 gap-2 md:gap-4">
        <div className="w-full h-full object-cover col-span-2 md:col-span-1 row-span-2 border-r-[8px] border-b-[8px] p-[8%] border-[#2c5fe7]">
          <div className="flex flex-row text-white gap-4 font-semibold text-2xl">
            <img src="https://i.ibb.co/FY7YF21/Frame.png" alt="icon" />
            <div>I am a learning process</div>
          </div>
          <div className="text-gray-400 mt-3 space-y-2 text-base font-normal">
            <div>
              {box1}
            </div>
            <div>
              {box1}
            </div>
            <div>
              {box1}
            </div>
            <div>
              {box1}
            </div>
            
          </div>
        </div>
        <div className="w-full h-full object-cover border-r-[8px] border-b-[8px] p-[8%] border-[#2c5fe7]">
          <div className="flex flex-row text-white gap-4 font-semibold text-2xl">
            <img src="https://i.ibb.co/S0pVKQc/Vector.png" alt="icon" />
            <div>I am a learning process</div>
          </div>
          <div className="text-gray-400 mt-3 text-base font-normal">
           {box2}
          </div>
        </div>
        <div className="w-full h-full object-cover border-r-[8px] border-b-[8px] p-[8%] border-[#2c5fe7]">
          <div className="flex flex-row text-white gap-4 font-semibold text-2xl">
            <img src="https://i.ibb.co/0nH5HPS/image-4-1.png" alt="icon" />
            <div>I am a learning process</div>
          </div>
          <div className="text-gray-400 mt-3 text-base font-normal">
           {box3}
          </div>
        </div>
        <div className="w-full h-full object-cover border-r-[8px] border-b-[8px] p-[8%] border-[#2c5fe7]">
          <div className="flex flex-row text-white gap-4 font-semibold text-2xl">
            <img src="https://i.ibb.co/Fbb7C4W/Group.png" alt="icon" />
            <div>I am a learning process</div>
          </div>
          <div className="text-gray-400 mt-3 text-base font-normal">
          {box4}
          </div>
        </div>
        <div className="w-full h-full object-cover border-r-[8px] border-b-[8px] p-[8%] border-[#2c5fe7]">
          <div className="flex flex-row text-white gap-4 font-semibold text-2xl">
            <img src="https://i.ibb.co/sybqXbd/image-3-2-1.png" alt="icon" />
            <div>I am a learning process</div>
          </div>
          <div className="text-gray-400 mt-3 text-base font-normal">
           {box5}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grids;
