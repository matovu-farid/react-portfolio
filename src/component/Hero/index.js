import { GiHamburgerMenu } from 'react-icons/gi';
import propTypes from 'prop-types';
import style from './style.module.scss';

const Hero = ({ showMenu }) => (
  <section className={`${style.section} section`}>

    <div id="hero" className={style.hero}>
      <div className={`content ${style.content}`}>

        <div className={style.menu}>
          <GiHamburgerMenu onClick={showMenu} />
        </div>
        <h1 className="heading">Farid Matovu</h1>
        <p className="text">
          Hello! I am a software developer! I can help you build
          a product, feature or website. Taka a look of my works.
          If you like what you see and have a project you need coded,
          don’t hesitate and contact me.
        </p>
        <button type="button" className="purple-btn">Start Collaboration</button>
      </div>
      <div className={style.divider} />
    </div>
  </section>
);

Hero.propTypes = {
  showMenu: propTypes.func.isRequired,
};

export default Hero;
