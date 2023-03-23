// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import sendArrow from "../assets/send.png";
import robo from "../assets/Services/robo.png";
//comopnents import
import Button from "../components/Global/Button";
import "./Slider.css";

// import required modules
import { Navigation } from "swiper";

export default function Slider({ products, children }) {
  //this is used for the RENDERED ITEMS
  const renderedItems = products.map((item, index) => {
    return (
      <SwiperSlide className="rounded-lg p-4 shadow-[5px_5px_0px_0px_#1a202c]">
        <img src={robo} alt="roboImg" className="w-[222px] h-[250px] my-4 mx-auto" />
        <h6>{item.content}</h6>
        <Button type="outline" text="LEARN MORE" stylecustom="btnAnimation font-semibold m-auto my-4" icon={true} src={sendArrow} iconStyle={{ height: "18px", width: "20px",marginLeft:"10px" }}/>
      </SwiperSlide>
    );
  }); //ENDOF THE renderedItems

  return (
    <>
      <Swiper
        // navigation={true}
        slidesPerView={3}
        spaceBetween={30}
        modules={[Navigation]}
        className="mySwiper cursor-pointer py-8"
      >
        {renderedItems}
      </Swiper>
    </>
  );
}
