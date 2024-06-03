import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import img1 from "../assets/images/image.png";

const Testimonials = () => {
  return (
    <div className="mx-auto">
      <h2 className="text-3xl text-white text-center my-4">Testimonials</h2>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper mx-3 my-3 p-2"
      >
        <SwiperSlide>
          <div className="lg:w-[54.3125rem] lg:mx-auto h-[15rem] bg-[#373636] p-4">
            <div className="flex gap-4 my-3 items-center">
              <img src={img1} alt="" className="rounded-lg" />
              <h4 className="font-qanelasSemibold text-lg md:text-xl text-white">
                Josh brollins
              </h4>
              <p className="text-xs text-white md:text-lg">mywebsite.com</p>
            </div>
            <p className="mb-3 text-white lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
              quis. Accusantium, enim voluptates quidem ad harum fugit
              reprehenderit architecto! Nihil accusamus sed atque ut excepturi!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="lg:w-[54.3125rem] lg:mx-auto h-[15rem] bg-[#373636] p-4">
            <div className="flex gap-4 my-3 items-center">
              <img src={img1} alt="" className="rounded-lg" />
              <h4 className="font-qanelasSemibold text-lg md:text-xl text-white">
                Josh brollins
              </h4>
              <p className="text-xs text-white md:text-lg">mywebsite.com</p>
            </div>
            <p className="mb-3 text-white lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
              quis. Accusantium, enim voluptates quidem ad harum fugit
              reprehenderit architecto! Nihil accusamus sed atque ut excepturi!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="lg:w-[54.3125rem] lg:mx-auto h-[15rem] bg-[#373636] p-4">
            <div className="flex gap-4 my-3 items-center">
              <img src={img1} alt="" className="rounded-lg" />
              <h4 className="font-qanelasSemibold text-lg md:text-xl text-white">
                Josh brollins
              </h4>
              <p className="text-xs text-white md:text-lg">mywebsite.com</p>
            </div>
            <p className="mb-3 text-white lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
              quis. Accusantium, enim voluptates quidem ad harum fugit
              reprehenderit architecto! Nihil accusamus sed atque ut excepturi!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="lg:w-[54.3125rem] lg:mx-auto h-[15rem] bg-[#373636] p-4">
            <p className="mb-3">
              <div className="flex gap-4 my-3 items-center">
                <img src={img1} alt="" className="rounded-lg" />
                <h4 className="font-qanelasSemibold text-lg md:text-xl text-white">
                  Josh brollins
                </h4>
                <p className="text-xs text-white md:text-lg">mywebsite.com</p>
              </div>
              <p className="mb-3 text-white lg:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Commodi, quis. Accusantium, enim voluptates quidem ad harum
                fugit reprehenderit architecto! Nihil accusamus sed atque ut
                excepturi!
              </p>
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonials;
