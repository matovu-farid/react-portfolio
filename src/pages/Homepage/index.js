import { useState } from 'react';
import Contact from '../../component/Contact';
import Footer from '../../component/Footer';
import Hero from '../../component/Hero';
import Menu from '../../component/Menu';
import Projects from '../../component/Projects';
import AboutSection from '../AboutSection';

const Homepage = () => {
  const [display, setDisplay] = useState('none');
  const close = () => {
    setDisplay('none');
  };
  const showMenu = () => {
    setDisplay('flex');
  };
  return (
    <div>
      <Menu display={display} close={close} />
      <Hero showMenu={showMenu} />
      <Projects />
      <AboutSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Homepage;
