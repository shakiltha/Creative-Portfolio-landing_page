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
          <div className="lg:w-[54.3125rem] lg:mx-auto h-[19rem] bg-[#373636] p-4">
            <div className="flex gap-4 my-3 items-center">
              <img src={img1} alt="" className="rounded-lg" />
              <h4 className="font-qanelasSemibold text-lg md:text-xl text-white">
                Josh brollins
              </h4>
              <p className="text-xs text-white md:text-lg">mywebsite.com</p>
            </div>
            <p className="mb-3 text-white lg:text-lg">
              This is a great website! The information is clear, concise, and
              easy to navigate. I particularly liked the "My Approach" section,
              which breaks down your design process into clear steps. The use of
              headings and visuals makes the website visually appealing and
              engaging. Overall, a great showcase of your skills and experience.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="lg:w-[54.3125rem] lg:mx-auto h-[25rem] bg-[#373636] p-4">
            <div className="flex gap-4 my-3 items-center">
              <img src={img1} alt="" className="rounded-lg" />
              <h4 className="font-qanelasSemibold text-lg md:text-xl text-white">
                Josh brollins
              </h4>
              <p className="text-xs text-white md:text-lg">mywebsite.com</p>
            </div>
            <p className="mb-3 text-white lg:text-lg">
              The website is well-designed and informative. However, it could
              benefit from a few tweaks. The "Services" section could be more
              specific about the types of projects you take on. For example,
              mentioning experience with e-commerce websites, mobile apps, or
              specific design software could be helpful. Additionally, consider
              including a call to action on the homepage, such as a contact form
              or a link to your portfolio.
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
          <div className="lg:w-[54.3125rem] lg:mx-auto h-[20rem] bg-[#373636] p-4">
            <p className="mb-3">
              <div className="flex gap-4 my-3 items-center">
                <img src={img1} alt="" className="rounded-lg" />
                <h4 className="font-qanelasSemibold text-lg md:text-xl text-white">
                  Josh brollins
                </h4>
                <p className="text-xs text-white md:text-lg">mywebsite.com</p>
              </div>
              <p className="mb-3 text-white lg:text-lg">
                Ethan's website is awesome! It's clear he puts a lot of thought
                into his work. I loved seeing the breakdown of his design
                process - research, concept, development - it makes perfect
                sense. The motion video & TVC section sounds super interesting,
                would love to see some examples of his work there! Overall, a
                very impressive portfolio.
              </p>
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonials;
