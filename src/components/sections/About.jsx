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
          <p>
            My journey into tech has been shaped by resilience and
            determination, from earning a full scholarship to pursue a Master's
            degree in Software Engineering at Cardiff University to starting my
            career in the UK tech industry.
          </p>
          <p className='mt-2'>What I do:</p>
          <p>
            <ul className='list-disc ml-5'>
              <li>Develop scalable backend services and APIs</li>
              <li>Build responsive, user-focused frontend applications</li>
              <li>Work with real-time data systems and integrations</li>
              <li>Focus on performance, reliability, and clean architecture</li>
            </ul>
          </p>
          <p className='mt-2'>What drives me:</p>
          <p>
            I enjoy solving complex problems and building scalable,
            user-friendly applications, with a focus on full-stack development
            with JavaScript/TypeScript, Node.js, and React where backend
            performance meets intuitive frontend experience providing
            production-ready solutions.
          </p>
        </motion.div>
        <SoftSkills />
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
