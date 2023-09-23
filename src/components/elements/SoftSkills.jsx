import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { softSkills } from "../../constants";

const SoftSkills = () => {
  return (
    <motion.div
      variants={fadeIn("up", "tween", 0.2, 0.8)}
      className='w-full max-w-[480px] rounded-[20px] green-pink-gradient-border'
    >
      <div
        className='glassmorphism lg:w-[478px] w-full h-full rounded-[20px] p-12'
        style={{ boxShadow: "none" }}
      >
        <ul className='flex flex-col gap-6'>
          {softSkills.map(skill => (
            <li key={skill.title}>
              <p className='text-[18px] mb-4'>{skill.title}</p>
              <div className='w-[100%] h-[10px] rounded-full bg-tertiary'>
                <div
                  className={`rounded-full h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500`}
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default SoftSkills;
