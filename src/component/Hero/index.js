import TypeAnimation from 'react-type-animation';
import style from './style.module.scss';

const Hero = () => (
  <section className={`${style.section} section h-4/5 md:h-screen md:relative md:top-20`}>
    <div id="hero" className={`${style.hero} `}>
      <div className="h-screen p-2">

        <div className="flex flex-col justify-center align-middle w-full h-3/4 md:h-screen">
          <TypeAnimation
            className="heading text-7xl lg:text-8xl"
            cursor={false}
            sequence={['Hi! I am Farid', 10000, '']}
            repeat={Infinity}
            wrapper="h1"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
