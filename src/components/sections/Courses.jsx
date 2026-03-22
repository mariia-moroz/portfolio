import { VerticalTimeline } from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import { styles } from "../../styles";
import { courses } from "../../constants";
import SectionWrapper from "../SectionWrapper";
import { textVariant } from "../../utils/motion";
import { ProgressCard } from "../../components";

const Courses = () => {
  return (
    <>
      <motion.div variants={textVariant()} className='w-full'>
        <p className={styles.sectionSubText}>What I have achieved so far</p>
        <h2 className={styles.sectionHeadText}>Courses and certifications</h2>
      </motion.div>
      <div className='mt-6 flex flex-col'>
        <VerticalTimeline>
          {courses.map((progressItem, index) => {
            return (
              <ProgressCard key={index} progress={progressItem}></ProgressCard>
            );
          })}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Courses, "courses");
