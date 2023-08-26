type Experience = {
  title: string,
  company_name: string,
  icon: string,
  date: string,
  points: string[]
}

const experiences = [
  {
    title: "python",
    company_name: "self-searning",
    icon: "/assets/logo/rds.png",
    date: "September, 2019 - Jan 2020",
    points: [
      "Began my programming journey with Python.",
    ],
  },
  {
    title: "exploring programming languages",
    company_name: "self-learning",
    icon: "/assets/logo/rds.png",
    date: "Feb 2020 - Dec 2020",
    points: [
      "Explored the world of C++ programming language.",
      "Took my first steps into web development with HTML, CSS, and JavaScript.",
    ],
  },
  {
    title: "projects and skill Development",
    company_name: "personal projects",
    icon: "/assets/logo/rds.png",
    date: "Jan 2021 - Jan 2022",
    points: [
      "Built CovidCare, a React Native app providing vital COVID-19 information.",
      "Crafted a CTVL (Communication Through Visible Light) device using Arduino and MicroPython.",
      "Mastered OpenCV for fascinating computer vision projects.",
      "Showcased creativity through projects like Discord bot, text-to-speech, and personal assistant.",
    ],
  },
  {
    title: "diving into robotics and websites",
    company_name: "personal projects",
    icon: "/assets/logo/rds.png",
    date: "Jan 2022 - Dec 2022",
    points: [
      "Designed my production website for the college science club.",
      "Delved deep into robotics, embedded system programming, and Telegram bots.",
      "Engineered Flutter and React Native apps for seamless robot control.",
      "Explored captivating math visualization projects.",
    ],
  },
  {
    title: "advanced projects and systems",
    company_name: "personal projects",
    icon: "/assets/logo/rds.png",
    date: "Jan 2023 - Present",
    points: [
      "Architected and brought to life a Student Management System for college administration.",
      "Engineered an intelligent learning bot powered by GPT-4",
      "Ventured into the realm of self-driving car simulation using the power of genetic algorithms.",
      "Learned deep learning through PyTorch.",
      "Produced end-to-end applications using MERN stack, from concept to deployment.",
      "Created TopsNet, an open-source project leveraging the Zenodo API. Implemented AI capabilities to elucidate complex research papers, enabling a wider audience to comprehend and engage with various projects, fostering collaboration and knowledge sharing.",
    ],
  },
];

export { experiences };
export type { Experience };
