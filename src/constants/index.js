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
  carrent,
  jobit,
  tripguide,
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
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { technologies, education, testimonials, projects };
