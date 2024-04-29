import type { Experience } from "@/types";

export const experiencesConfig: Experience[] = [
  {
    title: "Founder & Lead Engineer",
    employmentType: "Founder",
    company: {
      name: "Sonicrypt",
      url: "https://sonicrypt.vercel.app",
    },
    location: { name: "On site" },
    start: "April, 2024",
    end: "Present",
    description: [
      "Founded Sonicrypt to improve crypto transaction experience.",
      "Developed the Sonicrypt device with audio/visual payment confirmations.",
      "Integrated low-latency blockchain tech for real-time updates.",
      "Supported multiple wallets and customizable audio/visuals.",
      "Built React Native app for device configuration and management.",
      "Created Next.js website for product showcase and community.",
    ],
  },
  // {
  //   title: "Head of IT",
  //   employmentType: "Core Team member",
  //   company: {
  //     name: "Bettre Institute",
  //     url: "https://bettreinstitute.com",
  //   },
  //   location: { name: "Remote" },
  //   start: "November, 2023",
  //   end: "Present",
  //   description: [
  //     "Currently developing AI solutions for empowering L.M.S in our platform",
  //     "Developed the official website for Bettre Institute",
  //   ],
  // },
  {
    title: "Fullstack developer",
    employmentType: "Open Source contributor",
    company: {
      name: "LunCo",
      url: "https://lunco.space",
    },
    location: { name: "Remote" },
    start: "December, 2023",
    end: "Present",
    description: [
      "Currently adding more features to the web faced product of LunCo",
      "Developed the official website of LunCo",
    ],
  },
  {
    title: "Robot Programmer",
    employmentType: "Internship",
    company: {
      name: "Research Lab Bangladesh",
      url: "https://www.facebook.com/ResearchLabCtg/",
    },
    location: { name: "Remote" },
    start: "December, 2023",
    end: "Present",
    description: [],
  },
  {
    title: "Secretary of IT",
    employmentType: "Full-time",
    company: {
      name: "Rajshahi College Science Club",
      url: "https://rcsc.vercel.app",
    },
    location: {
      name: "Rajshahi College, Rajshahi, Bangladesh",
      url: "https://rc.edu.bd",
    },
    start: "November, 2022",
    end: "December, 2023",
    description: [
      "Managed the IT department of the club",
      "Built the official website of the club",
      "Supervised competitive programming under Rajshahi College National Science Fest 2023",
    ],
  },
];
