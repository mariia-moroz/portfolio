import { VerticalTimeline } from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import { styles } from "../../styles";
import { work } from "../../constants";
import SectionWrapper from "../SectionWrapper";
import { textVariant } from "../../utils/motion";
import { ProgressCard } from "../../components";

const Work = () => {
  return (
    <>
      <motion.div variants={textVariant()} className='w-full'>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work</h2>
      </motion.div>
      <div className='mt-6 flex flex-col'>
        <VerticalTimeline>
          {work.map((progressItem, index) => {
            return (
              <ProgressCard key={index} progress={progressItem}></ProgressCard>
            );
          })}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Work, "work");
