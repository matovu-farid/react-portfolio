import { GiHamburgerMenu } from 'react-icons/gi';
import style from './style.module.scss';

const Hero = () => (
  <div className={style.hero}>
    <div className={style.content}>

      <div className={style.menu}>
        <GiHamburgerMenu />
      </div>
      <h1 className={style.heading}>Farid Matovu</h1>
      <p className={style.text}>
        Hello! I am a software developer! I can help you build
        a product, feature or website. Taka a look of my works.
        If you like what you see and have a project you need coded,
        don’t hesitate and contact me.
      </p>
      <button type="button" className="purple-btn">Start Collaboration</button>
    </div>
    <div className={style.divider} />
  </div>
);

export default Hero;
