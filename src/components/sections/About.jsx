import React from "react";
import { motion } from "framer-motion";

import { styles } from "../../styles";
import { fadeIn, textVariant } from "../../utils/motion";
import SectionWrapper from "../SectionWrapper";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga odit
        maiores alias, molestiae eveniet fugit iste hic odio sequi ut amet
        repellendus fugiat placeat vitae similique, facere voluptatum ad. Qui?
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
        assumenda quia quo, repudiandae inventore doloribus omnis ipsam fugiat
        laboriosam reiciendis modi laudantium minima doloremque libero alias,
        eligendi iusto ad aliquam.
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
