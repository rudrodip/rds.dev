'use client'

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { experiences, Experience } from "@src/constants/experiences";
import Image from "next/image";
import { useTheme } from "next-themes";

const textVariant = (delay: number) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

type ExperienceCardProps = {
  experience: Experience
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <VerticalTimelineElement
      date={experience.date}
      contentStyle={{
        background: 'background',
        border: '2px solid black'
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
           <Image
            src={experience.icon}
            alt={experience.company_name}
            className='rounded-full grayscale hover:grayscale-0'
            width={50}
            height={50}
          />
        </div>
      }
    >
      <div className="">
        <h3 className='text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Journey = () => {
  const { theme } = useTheme()

  return (
    <section id="journey" className="my-10">
      <motion.div variants={textVariant(1)} className="mt-6 lg:mt-24">
        <p className='head_text text-center'>
          what my journey in programming looks like
        </p>
        <h2 className='text-center'>
          experiences.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline
        lineColor={theme === 'light' ? 'black' : 'white'}
        >
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Journey;