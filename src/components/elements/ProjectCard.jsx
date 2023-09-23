import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { fadeIn } from "../../utils/motion";
import { GithubIcon } from "../../assets";

const ProjectCard = ({ project, index }) => {
  const { name, description, tags, image, sourceCodeLink } = project;
  return (
    <Tilt
      options={{ max: 45, scale: 1, speed: 450 }}
      className='sm:w-[360px] sm:max-w-full max-w-[360px] w-full'
    >
      <motion.div
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        className='w-full h-full green-pink-gradient-border p-[1px] rounded-[20px] shadow-card '
      >
        <div className='relative w-full h-full glassmorphism p-5 rounded-[20px]'>
          <div className='relative w-full h-[230px]'>
            <img
              src={image}
              alt={name}
              className='w-full h-full object-cover rounded-[10px]'
            />
          </div>
          <div className='absolute top-4 right-4 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(sourceCodeLink, "_blank")}
              className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <GithubIcon
                className='w-[60%] h-[60%] object-contain'
                alt='github'
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
  );
};

export default ProjectCard;
