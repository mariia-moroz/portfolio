import React from "react";
import { motion } from "framer-motion";

import { styles } from "../../styles";
import SectionWrapper from "../SectionWrapper";
import { projects } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";
import { ProjectCard } from "..";

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>
      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className={`${styles.secondaryText}`}
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>
      <div className='mt-14 flex min-[874px]:flex-row flex-col max-[874px]:items-center items-stretch flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            project={project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
