import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  nodejs,
  mongodb,
  git,
  figma,
  styled,
  cardiff,
  goit,
  kpi,
  petly,
  filmoteka,
  sms,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const technologies = [
  {
    title: "HTML",
    icon: html,
  },
  {
    title: "CSS/SASS",
    icon: css,
  },
  {
    title: "JavaScript",
    icon: javascript,
  },
  {
    title: "TypeScript",
    icon: typescript,
  },
  {
    title: "React",
    icon: reactjs,
  },
  {
    title: "Redux",
    icon: redux,
  },
  {
    title: "Node JS",
    icon: nodejs,
  },
  {
    title: "Git",
    icon: git,
  },
  {
    title: "MongoDB",
    icon: mongodb,
  },
  {
    title: "Emotion + Styled",
    icon: styled,
  },
  {
    title: "Figma",
    icon: figma,
  },

  {
    title: "Parcel Webpack Babel",
    icon: null,
  },
];

const education = [
  {
    title: "MSc Software Engineering",
    universityName: "Cardiff University (Cardiff, UK)",
    icon: cardiff,
    iconBg: "#F7F9FC",
    date: "Sep 2022 - Sep 2023",
    points: [
      "Agile Software Development",
      "Developing and maintaining web applications (HTML/CSS/JS)",
      "Programming Principles and Practice (Java)",
      "DevOps (Jenkins, CI/CD)",
      "Manipulating and Exploiting Data (Python)",
      "Delivering User Experience",
    ],
  },
  {
    title: "BSc Information Systems and Technologies",
    universityName:
      "National Technical University of Ukraine “Igor Sikorsky Kyiv Polytechnic Institute” (Kiev, Ukraine)",
    icon: kpi,
    iconBg: "#F7F9FC",
    date: "Sep 2018 - Jun 2022",
    points: [
      "Object-Oriented Programming (C, C++)",
      "Operating Systems",
      "Development of web applications on the Microsoft.NET (HTML/CSS/JS, C#)",
      "Development of Mobile Applications (Java, Kotlin)",
      "Data Analysis/Algorithms",
    ],
  },
  {
    title: "Full Stack Developer",
    universityName: "GoIT (Kiev, Ukraine)",
    icon: goit,
    iconBg: "#F7F9FC",
    date: "Sep 2021 - Sep 2022",
    points: [
      "Implementing responsive design and ensuring cross-browser compatibility (HTML + CSS)",
      "Developing and maintaining web applications using React.js (JavaScript) and other related technologies (Redux Toolkit, Rest APIs)",
      "Backend development with Express.js (Node.js) and MongoDB management system",
      "Collaborating with cross-functional teams to create high-quality products",
    ],
  },
];

const projects = [
  {
    name: "Petly",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
      },
      {
        name: "nodejs",
      },
      {
        name: "emotion",
      },
      {
        name: "formik",
      },
      {
        name: "yup",
      },
    ],
    image: petly,
    sourceCodeLink: "https://github.com/velogitara/petly-project-front",
  },
  {
    name: "Filmoteka",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "javascript",
      },
      {
        name: "restapi",
      },
      {
        name: "scss",
      },
      {
        name: "parcell",
      },
    ],
    image: filmoteka,
    sourceCodeLink: "https://github.com/mariia-moroz/goit-filmoteka",
  },
  {
    name: "Smart Metering Systems",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "html",
      },
      {
        name: "css",
      },
      {
        name: "javascript",
      },
      {
        name: "springboot",
      },
      {
        name: "leaflet",
      },
      {
        name: "cicd",
      },
    ],
    image: sms,
    sourceCodeLink: "https://github.com/mariia-moroz/sms",
  },
];

export { technologies, education, projects };
