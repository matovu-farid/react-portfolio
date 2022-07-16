import { GiHamburgerMenu } from 'react-icons/gi';
import Animate from '../../component/Animate';
import Contact from '../../component/Contact';
import Footer from '../../component/Footer';
import Hero from '../../component/Hero';
import Menu from '../../component/Menu';
import Navlist from '../../component/Menu/Navlist';
import Projects from '../../component/Projects';
import usePopup from '../../Hooks/usePopup';
import AboutSection from '../AboutSection';
import style from './style.module.scss';

const Homepage = () => {
  const {
    display, seeMore, close,
  } = usePopup();
  return (
    <div>
      <div className={`${style.navlist} center`}>

        <Navlist close={() => {}} />
      </div>
      <Menu display={display} close={close} />
      <div className="text-5xl fixed right-0 top-0 p-5">
        <GiHamburgerMenu onClick={seeMore} />
      </div>
      <Animate>

        <Hero showMenu={seeMore} />
      </Animate>
      <Animate>

        <AboutSection />
      </Animate>
      <Animate>

        <Projects />
      </Animate>
      <Animate>

        <Contact />
      </Animate>
      <Animate>

        <Footer />
      </Animate>
    </div>
  );
};

export default Homepage;
