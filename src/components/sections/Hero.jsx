import { styles } from "../../styles";
import MyImage from "../../assets/me.png";
import { SocialLinksMenu } from "../../components";

const Hero = () => {
  return (
    <section className={`${styles.paddingX} max-w-7xl mx-auto`}>
      <div
        className={`sm:pt-[120px] pt-[80px] w-full flex lg:flex-row flex-col items-start justify-between gap-5`}
      >
        <div className='flex gap-5'>
          <div className='flex flex-col justify-top items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-accent' />
            <div className='w-1 h-full violet-gradient'></div>
          </div>
          <div
            className='xl:max-w-[600px] sm:max-w-[500px] max-w-[100]
            sm:pt-[40px] pt-[30px] pb-10'
          >
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I am <span className='text-accent'>Mariia</span>
            </h1>
            <p className={`${styles.heroSubText} mt-3 text-white-100`}>
              A Full-Stack Software Engineer from Ukraine 🇺🇦 now based in
              London, UK <br />I build scalable web applications and real-time
              data systems using JavaScript/TypeScript, Node.js, and React.{" "}
              <br />
              My experience covers both backend and frontend development,
              including API design, distributed systems, and modern user
              interfaces.
            </p>
            <SocialLinksMenu />
          </div>
        </div>
        <img
          src={MyImage}
          alt='me'
          className='lg:w-[380px] sm:w-[320px] xs:w-[280px] w-[220px] lg:mx-0 mx-auto'
        />
      </div>
    </section>
  );
};

export default Hero;
