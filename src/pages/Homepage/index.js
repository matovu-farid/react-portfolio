import About from '../../component/About';
import AboutCards from '../../component/AboutCards';
import Contact from '../../component/Contact';
import Footer from '../../component/Footer';
import Hero from '../../component/Hero';
import Projects from '../../component/Projects';

const Homepage = () => (
  <div>
    <Hero />
    <Projects />
    <About />
    <AboutCards />
    <Contact />
    <Footer />
  </div>
);

export default Homepage;
