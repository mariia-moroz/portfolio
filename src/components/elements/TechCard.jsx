import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { fadeIn } from "../../utils/motion";

const TechCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[150px] w-[145px]'>
      <motion.div
        variants={fadeIn("right", "spring", 0.4 * index, 0.65)}
        className='w-full green-pink-gradient-border shadow-card'
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className='glassmorphism rounded-[20px] py-5 px-8 min-h-[160px] flex justify-evenly items-center flex-col'
        >
          {icon && (
            <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          )}
          <p className='text-white xs:text-[18px] text-[16px] font-semibold text-center'>
            {title}
          </p>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default TechCard;
