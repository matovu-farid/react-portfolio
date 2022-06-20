import { GiHamburgerMenu } from 'react-icons/gi';
import propTypes from 'prop-types';
import style from './style.module.scss';

const Hero = ({ showMenu }) => (
  <section className={`${style.section} section h-screen`}>

    <div id="hero" className={style.hero}>
      <div className={`content ${style.content}`}>

        <div className={style.menu}>
          <GiHamburgerMenu onClick={showMenu} />
        </div>
        <div className="flex flex-col justify-center align-middle">

          <h1 className="heading lg:text-8xl">
            Hi! am,
            <br />
            {' '}
            Farid Matovu
          </h1>
        </div>

      </div>
      {/* <div className={style.divider} /> */}
    </div>
  </section>
);

Hero.propTypes = {
  showMenu: propTypes.func.isRequired,
};

export default Hero;
