import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const TechCard = ({ index, title, icon }) => {
  return (
    // <Tilt className='xs:w-[250px] w-full'>
    <Tilt className='xs:w-[150px] w-[120px]'>
      <motion.div
        variants={fadeIn("right", "spring", 0.4 * index, 0.65)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className='bg-tertiary rounded-[20px] py-5 px-8 min-h-[180px] flex justify-evenly items-center flex-col'
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
