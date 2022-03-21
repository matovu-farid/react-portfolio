import About from '../../component/About';
import AboutCards from '../../component/AboutCards';
import style from './style.module.scss';

const AboutSection = () => (
  <section className={`center-box ${style.section}`}>

    <div className={style.about} id="about">
      <About />
      <AboutCards />
    </div>
  </section>
);

export default AboutSection;
