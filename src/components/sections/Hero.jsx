import { styles } from "../../styles";
import MyImage from "../../assets/me.png";
import { SocialLinksMenu } from "../../components";

const Hero = () => {
  return (
    <section
      className={`${styles.paddingX} max-w-7xl min-h-screen mx-auto flex items-center`}
    >
      <div
        className={`sm:pt-[120px] pt-[80px] w-full flex lg:flex-row flex-col items-start justify-between gap-5`}
      >
        <div className='flex gap-5'>
          <div className='flex flex-col justify-top items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-accent' />
            <div className='w-1 h-full violet-gradient'></div>
          </div>
          <div
            className='xl:max-w-[600px] sm:max-w-[500px] max-w-[400px]
            sm:pt-[40px] pt-[30px] pb-10'
          >
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I am <span className='text-accent'>Mariia</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              A passionate developer from Ukraine 🇺🇦 eager to create visually
              stunning and user-friendly applications
            </p>
            <SocialLinksMenu />
          </div>
        </div>
        <img
          src={MyImage}
          alt='me'
          className='lg:w-[380px] sm:w-[320px] xs:w-[280px] w-[240px] lg:mx-0 mx-auto'
        />
      </div>
    </section>
  );
};

export default Hero;
