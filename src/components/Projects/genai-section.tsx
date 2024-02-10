"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import GenAI1 from "./genai/genai1";
import GenAI2 from "./genai/genai2";
import GenAI3 from "./genai/genai3";

export default function GenAISection() {
  return (
    <section id="genai" className="w-full mt-12 md:mt-24 lg:mt-48">
      <h1 className="head-text mt-24 max-w-7xl mx-auto">
        <span className="before:block before:absolute before:-inset-1 before:skew-y-3 before:bg-blue-400 before:dark:bg-blue-500 relative inline-block">
          <span className="relative head-text text-white">Gen AI</span>{" "}
        </span>{" "}
        projects?? Yup!!
      </h1>
      <Swiper
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        speed={2000}
        loop={true}
        modules={[Autoplay]}
        className="h-full mySwiper"
      >
        <SwiperSlide>
          <GenAI1 />
        </SwiperSlide>
        <SwiperSlide>
          <GenAI2 />
        </SwiperSlide>
        <SwiperSlide>
          <GenAI3 />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
