import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { fadeIn } from "../utils/motion";
import { github } from "../assets";

const ProjectCard = ({ project, index }) => {
  const { name, description, tags, image, sourceCodeLink } = project;
  return (
    // <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    //   <Tilt
    //     options={{ max: 45, scale: 1, speed: 450 }}
    //     className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
    //   >
    //     <div className='relative w-full h-[230px]'>
    //       <img
    //         src={image}
    //         alt={name}
    //         className='w-full h-full object-cover rounded-2xl'
    //       />
    //     </div>
    //     <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
    //       <div
    //         onClick={() => window.open(sourceCodeLink, "_blank")}
    //         className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
    //       >
    //         <img
    //           src={github}
    //           alt={github}
    //           className='w-1/2 h-1/2 object-contain'
    //         />
    //       </div>
    //     </div>
    //   </Tilt>
    // </motion.div>

    <Tilt
      options={{ max: 45, scale: 1, speed: 450 }}
      className='sm:w-[360px] sm:max-w-full max-w-[360px] w-full'
    >
      <motion.div
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        className='w-full h-full green-pink-gradient p-[1px] rounded-2xl shadow-card '
      >
        <div className='relative w-full h-full bg-tertiary p-5 rounded-2xl'>
          <div className='relative w-full h-[230px]'>
            <img
              src={image}
              alt={name}
              className='w-full h-full object-cover rounded-2xl'
            />
          </div>
          <div className='absolute top-4 right-4 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(sourceCodeLink, "_blank")}
              className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt={github}
                className='w-[60%] h-[60%] object-contain'
              />
            </div>
          </div>
          <div className='mt-5'>
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>
            <p className='mt-2 text-secondary text-[14px]'>{description}</p>
          </div>
          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag, tagIndex) => (
              <p
                key={`${index}-${tagIndex}`}
                className={`text-[14px] text-cyan-300`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </motion.div>
    </Tilt>

    // <Tilt className='xs:w-[150px] w-[120px]'>
    //   <motion.div
    //     variants={fadeIn("right", "spring", 0.4 * index, 0.65)}
    //     className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    //   >
    //     <div
    //       options={{ max: 45, scale: 1, speed: 450 }}
    //       className='bg-tertiary rounded-[20px] py-5 px-8 min-h-[170px] flex justify-evenly items-center flex-col'
    //     >
    //       {icon && (
    //         <img src={icon} alt={title} className='w-16 h-16 object-contain' />
    //       )}
    //       <p className='text-white xs:text-[18px] text-[16px] font-semibold text-center'>
    //         {title}
    //       </p>
    //     </div>
    //   </motion.div>
    // </Tilt>
  );
};

export default ProjectCard;
