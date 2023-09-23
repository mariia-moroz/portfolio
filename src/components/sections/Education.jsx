import { VerticalTimeline } from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import { styles } from "../../styles";
import { education } from "../../constants";
import SectionWrapper from "../SectionWrapper";
import { textVariant } from "../../utils/motion";
import { EducationCard } from "../../components";

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Education</h2>
      </motion.div>
      <div className='mt-14 flex flex-col'>
        <VerticalTimeline>
          {education.map((educationItem, index) => {
            return (
              <EducationCard
                key={index}
                education={educationItem}
              ></EducationCard>
            );
          })}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
