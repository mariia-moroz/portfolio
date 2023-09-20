import { motion } from "framer-motion";

import { styles } from "../styles";
import MyImage from "../assets/me.png";

const Hero = () => {
  return (
    <section className='w-full min-h-screen mx-auto'>
      <div
        className={`${styles.paddingX} pt-[120px] max-w-7xl mx-auto flex md:flex-row flex-col md:items-start items-center justify-between gap-5`}
      >
        <div className='flex gap-5'>
          <div className='flex flex-col justify-top items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-accent' />
            <div className='w-1 md:h-80 h-60 violet-gradient'></div>
          </div>
          <div className='max-w-[600px]'>
            <h1 className={`${styles.heroHeadText} text-white mt-[40px]`}>
              Hi, I am <span className='text-accent'>Mariia</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              A passionate developer from Ukraine 🇺🇦 eager to create visually
              stunning and user-friendly applications
            </p>
          </div>
        </div>
        <img
          src={MyImage}
          alt='me'
          className='lg:w-[360px] sm:w-[300px] w-[280px]'
        />
      </div>
      {/* <ComputersCanvas /> */}
    </section>
  );
};

export default Hero;
