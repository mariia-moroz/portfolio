import { motion } from "framer-motion";

import { styles } from "../styles";
import MyImage from "../assets/me.png";

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-accent' />
          <div className='w-1 sm:h-80 h-40 violet-gradient'></div>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I am <span className='text-accent'>Mariia</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A passionate developer from Ukraine 🇺🇦 <br />
            eager to create visually stunning <br />
            and user-friendly applications
          </p>
        </div>
        <img src={MyImage} alt='me' width={400} />
      </div>
      {/* <ComputersCanvas /> */}
    </section>
  );
};

export default Hero;
