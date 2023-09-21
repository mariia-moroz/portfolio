import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import TechCard from "./TechCard";
import SectionWrapper from "./SectionWrapper";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I am good at</p>
        <h2 className={styles.sectionHeadText}>Technical Skills</h2>
      </motion.div>
      <div className='mt-20 justify-center flex flex-wrap xs:gap-10 gap-6'>
        {technologies.map((technology, index) => (
          <TechCard key={technology.title} index={index} {...technology} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
