import type { Project } from "@src/types";

export const projects: Project[] = [
  {
    name: "Sonicrypt",
    slogan: "Bring sound and sight to your silent transactions",
    description: "Sonicrypt is a compact and intuitive tool designed to enhance the user experience for both buyers and sellers engaging in crypto transactions. Its primary function is to provide immediate auditory and visual confirmation of successful payments, thereby instilling confidence and trust in digital transactions",
    relatedRepos: [
      "https://github.com/Sonicrypt",
      "https://github.com/Sonicrypt/sonicrypt",
      "https://github.com/Sonicrypt/sonicrypt-app",
      "https://github.com/Sonicrypt/sonicrypt-webapp",
    ],
    media: {
      video: "https://firebasestorage.googleapis.com/v0/b/collabsync-yt.appspot.com/o/white-theme.mp4?alt=media&token=34acc426-7e1e-4588-be73-aca560871353",
      images: [
        "https://sonicrypt.vercel.app/og.png"
      ],
    },
    achievements: [],
    tech: [
      "ESP32-S3", "C++", "Solana web3js", "React Native", "Nextjs 14"
    ],
    links: {
      "Website": "https://sonicrypt.vercel.app",
      "Demo": "https://www.youtube.com/watch?v=yUm7kYV3p28",
      "App": "https://github.com/Sonicrypt/sonicrypt-app/releases",
      "Twitter/X": "https://twitter.com/sonicrypt",
    }
  },
  {
    name: "NexusOS",
    slogan: "Connecting Minds, Advancing Science",
    description: "NexusOS is a platform that empowers researchers, scientists, and innovators to come together and collaborate on impactful scientific projects. Discover, join, or create open science initiatives across diverse fields. Join us in shaping the future of science and discovery",
    relatedRepos: [
      "https://github.com/rudrodip/NexusOS",
    ],
    media: {
      video: "https://firebasestorage.googleapis.com/v0/b/hmmmhmmmhh.appspot.com/o/n.mp4?alt=media&token=bbd5ffed-cb00-4a54-98a4-f989887644bd",
      images: [
        "/projects/featured1/thumbnail.png"
      ],
    },
    achievements: [
      "Selected as a Global Nominee for NASA Space Apps Challenge 2023"
    ],
    tech: [
      "Next.js",
      "Next-Auth",
      "Supabase",
      "Prisma",
      "Shadcn UI",
      "Github octokit",
      "TailwindCSS",
      "Framer Motion",
    ],
    links: {
      "Website": "https://nexusos.vercel.app",
      "Demo": "https://youtu.be/xZwEQJX_JbQ",
    }
  },
  {
    name: "Harmonic Motion Analyzer",
    slogan: "Leveraging Computer Vision for harmonic motion analysis",
    description: "This Python project is designed to analyze the harmonic oscillation of an object using computer vision techniques. It leverages various libraries, including OpenCV for video feed processing, SciPy for data analysis, NumPy for numerical operations, and PyQt5 for creating a graphical user interface (GUI). The project detects and tracks an object in a video feed, extracts its motion data, fits it to a damped oscillation function, and calculates physical parameters such as pendulum length and pivot point location",
    relatedRepos: [
      "https://github.com/rudrodip/Harmonic-Oscillator-CV"
    ],
    media: {
      video: "https://firebasestorage.googleapis.com/v0/b/hmmmhmmmhh.appspot.com/o/h.mp4?alt=media&token=7d401557-583d-4872-9b95-a79230288d4d",
      images: [
        "/projects/featured2/thumbnail.png"
      ],
    },
    achievements: [
      "Scored Highest in Creative Coding Competition organized by Radu Mariescu-Istodor"
    ],
    tech: [
      "Python",
      "OpenCV-headless",
      "PyQt5",
      "PyQtGraph",
      "Matplotlib",
      "Numpy",
      "SciPy",
    ],
    links: {
      "Website": "https://rudrodip.tech/blog/harmonic-oscillation-analyzer",
      "Demo": "https://www.youtube.com/watch?v=dalsCsHtreU&t=1220s",
    }
  },
]