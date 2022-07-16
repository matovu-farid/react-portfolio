import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Animate from '../../component/Animate';
import Contact from '../../component/Contact';
import Footer from '../../component/Footer';
import Hero from '../../component/Hero';
import Menu from '../../component/Menu';
import Navlist from '../../component/Menu/Navlist';
import Projects from '../../component/Projects';
import AboutSection from '../AboutSection';
import style from './style.module.scss';

const Homepage = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const openMenu = () => {
    setIsMenuShown(true);
  };
  const close = () => {
    setIsMenuShown(false);
  };

  return (
    <div>
      <div className={`${style.navlist} center`}>

        <Navlist close={() => {}} />
      </div>
      {
        isMenuShown && <Menu close={close} />
      }
      {
         isMenuShown || (
         <div className="text-4xl text-pink-500 md:hidden mix-blend-difference fixed z-40 right-0 top-0 p-5">
           <GiHamburgerMenu onClick={openMenu} />
         </div>
         )
      }

      <Animate>

        <Hero />
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
