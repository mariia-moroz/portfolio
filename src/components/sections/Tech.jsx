import { motion } from "framer-motion";

import { styles } from "../../styles";
import { technologies } from "../../constants";
import { textVariant } from "../../utils/motion";
import { TechCard } from "../../components";
import SectionWrapper from "../SectionWrapper";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I am good at</p>
        <h2 className={styles.sectionHeadText}>Technical Skills</h2>
      </motion.div>
      <div className='mt-14 justify-center flex flex-wrap xs:gap-10 gap-4'>
        {technologies.map((technology, index) => (
          <TechCard key={technology.title} index={index} {...technology} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
