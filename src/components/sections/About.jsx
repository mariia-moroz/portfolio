import React from "react";
import { motion } from "framer-motion";

import { styles } from "../../styles";
import { fadeIn, textVariant } from "../../utils/motion";
import SectionWrapper from "../SectionWrapper";
import { SoftSkills } from "../../components";

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
          related technologies. <br /> I'm always hungry for knowledge and
          committed to staying updated with the latest trends, technologies, and
          best practices to stay at the forefront of web development. <br />
          Besides writing clean code and solving complex problems, I combine
          aesthetics with functionality to ensure that the end-users have an
          unforgettable experience.
        </motion.div>
        <SoftSkills />
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
