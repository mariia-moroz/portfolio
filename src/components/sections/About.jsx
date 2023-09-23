import React from "react";
import { motion } from "framer-motion";

import { styles } from "../../styles";
import { fadeIn, textVariant } from "../../utils/motion";
import SectionWrapper from "../SectionWrapper";
import { softSkills } from "../../constants";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <div className='flex items-start lg:flex-row flex-col lg:gap-16 gap-14'>
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className={`${styles.secondaryText}`}
        >
          I'm a skilled software developer with experience in TypeScript and
          JavaScript, and expertise in frameworks like React, Node.js and
          related libraries. My passion for web development has been the driving
          force behind my journey to create solutions that have the potential to
          impact millions of users, making their lives easier. <br /> I'm always
          hungry for knowledge and committed to staying updated with the latest
          trends, technologies, and best practices to stay at the forefront of
          web development. <br />
          Besides writing clean code and solving complex problems, I combine
          aesthetics with functionality to ensure that the end-users have an
          unforgettable experience.
        </motion.div>
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 0.8)}
          className='w-full max-w-[480px] rounded-[20px] green-pink-gradient-border'
        >
          <div
            className='glassmorphism lg:w-[478px] w-full h-full rounded-[20px] p-12'
            style={{ boxShadow: "none" }}
          >
            <ul className='flex flex-col gap-6'>
              {softSkills.map(skill => (
                <li key={skill.title}>
                  <p className='text-[18px] mb-4'>{skill.title}</p>
                  <div className='w-[100%] h-[10px] rounded-full bg-tertiary opacity-90'>
                    <div
                      className={`rounded-full h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500`}
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
