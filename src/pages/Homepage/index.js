import { useRef } from 'react';
import Contact from '../../component/Contact';
import Footer from '../../component/Footer';
import Hero from '../../component/Hero';
import Menu from '../../component/Menu';
import Projects from '../../component/Projects';
import AboutSection from '../AboutSection';

const Homepage = () => {
  const popupRef = useRef(null);
  const close = () => {
    popupRef.current.close();
  };
  const showMenu = () => {
    popupRef.current.showModal();
  };
  return (
    <div>
      <dialog ref={popupRef}>
        <Menu close={close} />
      </dialog>

      <Hero showMenu={showMenu} />
      <Projects />
      <AboutSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Homepage;
