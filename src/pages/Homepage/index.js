import Backdrop from '../../component/Backdrop';
import Contact from '../../component/Contact';
import Footer from '../../component/Footer';
import Hero from '../../component/Hero';
import Menu from '../../component/Menu';
import Projects from '../../component/Projects';
import usePopup from '../../Hooks/usePopup';
import AboutSection from '../AboutSection';

const Homepage = () => {
  const {
    display, seeMore, close, modal,
  } = usePopup();
  return (
    <div>
      <Backdrop display={display} mystyle={modal} />
      <Menu display={display} close={close} />
      <Hero showMenu={seeMore} />
      <Projects />
      <AboutSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Homepage;
