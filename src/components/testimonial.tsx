"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, FreeMode } from "swiper/modules";
import useMediaQuery from "@/hooks/use-media-query";
import Comment from "./Projects/comment";
import type { CommentProps } from "./Projects/comment";

export default function RecentProjects() {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const isTablet = useMediaQuery("(max-width: 1200px)");

  return (
    <section className="w-full max-w-7xl mx-auto px-4 lg:px-4 my-48 md:my-52 lg:my-60">
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
        className="h-full flex justify-center items-center mySwiper
          after:content['']
          after:to-transparent
          after:from-background
          after:bg-gradient-to-l
          after:-right-3
          after:top-0
          after:w-20
          after:h-full
          after:z-10
          after:absolute

          before:content['']
          before:to-transparent
          before:from-background
          before:bg-gradient-to-r
          before:top-0
          before:-left-3
          before:w-20
          before:h-full
          before:z-10
          before:absolute
        "
      >
        {comments.map((comment, idx) => (
          <SwiperSlide key={idx}>
            <Comment {...comment} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

const comments: CommentProps[] = [
  {
    commentor: "Random",
    commentorDesignation: "Software developer",
    commentorImage: "https://github.com/rudrodip.png",
    commentorUrl: "https://github.com",
    comment: "Some random comment by a random person",
  },
  {
    commentor: "Random",
    commentorDesignation: "Software developer",
    commentorImage: "https://github.com/rudrodip.png",
    commentorUrl: "https://github.com",
    comment: "Some random comment by a random person",
  },
  {
    commentor: "Random",
    commentorDesignation: "Software developer",
    commentorImage: "https://github.com/rudrodip.png",
    commentorUrl: "https://github.com",
    comment: "Some random comment by a random person",
  },
  {
    commentor: "Random",
    commentorDesignation: "Software developer",
    commentorImage: "https://github.com/rudrodip.png",
    commentorUrl: "https://github.com",
    comment: "Some random comment by a random person",
  },
  {
    commentor: "Random",
    commentorDesignation: "Software developer",
    commentorImage: "https://github.com/rudrodip.png",
    commentorUrl: "https://github.com",
    comment: "Some random comment by a random person",
  },
];
