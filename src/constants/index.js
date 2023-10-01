import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
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

export const socialLinks = [
  {
    title: "github",
    icon: GithubIcon,
    link: "https://github.com/mariia-moroz",
  },
  {
    title: "instagram",
    icon: InstagramIcon,
    link: "https://www.instagram.com/m.a.s.h_mallow/",
  },
  {
    title: "linkedin",
    icon: LinkedinIcon,
    link: "https://www.linkedin.com/in/mariia-moroz-35330b236/",
  },
];

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
];

const softSkills = [
  {
    title: "Flexibility",
    percentage: 100,
  },
  {
    title: "Communication",
    percentage: 95,
  },
  {
    title: "Time management",
    percentage: 90,
  },
  {
    title: "Problem solving",
    percentage: 95,
  },
  {
    title: "Teamwork",
    percentage: 90,
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
];

const projects = [
  {
    name: "Petly",
    description:
      "A web application that helps pets and their owners find each other. It allows users to post and view adverts to sell or put pets in good hands, contact owners, find lost pets and view pet news.",
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
      {
        name: "mongodb",
      },
    ],
    image: petly,
    sourceCodeLink: "https://github.com/velogitara/petly-project-front",
    deployedLink: "https://velogitara.github.io/petly-project-front",
  },
  {
    name: "Filmoteka",
    description:
      "Web-based platform that enables users to keep track of new movies to watch, view their IMDb ratings and info, add films to own library and watch trailers.",
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
    deployedLink: "https://mariia-moroz.github.io/goit-filmoteka",
  },
  {
    name: "Smart Metering Systems",
    description:
      "Web application for Smart Metering Systems UK, which serves as an interactive map showing the location and information of installed smart meters that monitor household energy consumption.",
    tags: [
      {
        name: "javascript",
      },
      {
        name: "mongodb",
      },
      {
        name: "springboot",
      },
      {
        name: "springsecurity",
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
    deployedLink: null,
  },
];

export { technologies, education, projects, softSkills };
