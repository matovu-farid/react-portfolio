import About from '../../component/About';
import AboutCards from '../../component/AboutCards';
import style from './style.module.scss';

const AboutSection = () => (
  <section className={style.section} id="about">
    <About />
    <AboutCards />
  </section>
);

export default AboutSection;
