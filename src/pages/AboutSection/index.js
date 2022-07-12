import About from '../../component/About';
import AboutCards from '../../component/AboutCards';
import style from './style.module.scss';

const AboutSection = () => (
  <section id="about" className={`center-box ${style.section} section md:h-screen`}>

    <div className={style.about}>
      <About />
      <AboutCards />
    </div>
  </section>
);

export default AboutSection;
