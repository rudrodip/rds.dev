"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import useMediaQuery from "@/hooks/use-media-query";
import Comment from "./Projects/comment";
import type { CommentProps } from "./Projects/comment";

export default function RecentProjects() {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const isTablet = useMediaQuery("(max-width: 1200px)");

  return (
    <section className="w-full min-h-[50vh] max-w-7xl mx-auto px-4 lg:px-4 flex items-center">
      <Swiper
        slidesPerView={isMobile ? 1 : isTablet ? 2 : 3}
        spaceBetween={10}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={2000}
        loop={true}
        modules={[Autoplay, FreeMode]}
        freeMode={true}
        className="h-full flex justify-center items-center mySwiper"
      >
        {comments.map((comment, idx) => (
          <SwiperSlide
            key={idx}
            style={{
              height: "auto",
            }}
          >
            <Comment {...comment} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

const comments: CommentProps[] = [
  {
    comment:
      "I've always known you to be detail-oriented and committed to quality, which clearly reflects in the work.",
    commentor: "Malhar Ujawane",
    commentorDesignation: "Software Engineer | PhD GenAI LLM Researcher",
    commentorImage: "/commentor/malhar.jpg",
    commentorUrl: "https://www.linkedin.com/in/justmalhar/",
  },
  {
    commentor: "Ben Holmes",
    commentorDesignation: "President of Whiteboards @astrodotbuild",
    commentorImage: "/commentor/ben.jpg",
    commentorUrl: "https://twitter.com/BHolmesDev",
    comment: "Nice portfolio! The tweet overlays on your projects are really effective",
  },
  {
    comment:
      "Wow, Rudro! This robot is amazing! Truly, these types of projects are an inspiration for me and for the entire developer community!",
    commentor: "Cristian Marcelo de Picciotto",
    commentorDesignation:
      "Systems Analyst | Magento Certified Professional Developer",
    commentorImage: "/commentor/marcelo.jpg",
    commentorUrl: "https://www.linkedin.com/in/cristian-marcelo-de-picciotto/",
  },
];
