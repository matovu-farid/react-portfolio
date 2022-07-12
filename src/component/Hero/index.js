import { GiHamburgerMenu } from 'react-icons/gi';
import propTypes from 'prop-types';
import TypeAnimation from 'react-type-animation';
import style from './style.module.scss';

const Hero = ({ showMenu }) => (
  <section className={`${style.section} section h-4/5 md:h-screen md:relative md:top-20`}>
    <div id="hero" className={`${style.hero} `}>
      <div className={`content ${style.content}`}>
        <div className={style.menu}>
          <GiHamburgerMenu onClick={showMenu} />
        </div>
        <div className="flex flex-col justify-center align-middle w-96 h-full">
          <TypeAnimation
            className="heading lg:text-8xl"
            cursor={false}
            sequence={['Hi! am', 1000, 'Farid Matovu', 10000]}
            repeat={Infinity}
            wrapper="h1"
          />
        </div>
      </div>
    </div>
  </section>
);

Hero.propTypes = {
  showMenu: propTypes.func.isRequired,
};

export default Hero;
