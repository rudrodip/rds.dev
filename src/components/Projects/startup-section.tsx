"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import Startup1 from "./startup-sites/startup-1";
import Startup2 from "./startup-sites/startup-2";

export default function StartupSection() {
  return (
    <section id="startup" className="w-full mt-12 md:mt-24 lg:mt-48">
      <h1 className="head-text mt-24 max-w-7xl mx-auto">
        <span className="before:block before:absolute before:-inset-1 before:skew-y-3 before:bg-blue-400 before:dark:bg-blue-500 relative inline-block">
          <span className="relative head-text text-white">Startup</span>{" "}
        </span>{" "}
        work experince? Yup!!
      </h1>
      <Swiper
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        speed={2000}
        loop={true}
        modules={[Autoplay]}
        className="h-full mySwiper"
      >
        <SwiperSlide>
          <Startup1 />
        </SwiperSlide>
        <SwiperSlide>
          <Startup2 />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
