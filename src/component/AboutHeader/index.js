import { BiDownload } from 'react-icons/bi';
import style from './style.module.scss';
import '../../scss/globals.scss';

const About = () => (
  <div className="content">
    <h2 className="heading">About</h2>
    <p className="text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ea eiusmod
    </p>
    <button type="button" className={`purple-btn ${style.button}`}>
      <span>Get my CV</span>
      <span><BiDownload /></span>
    </button>
  </div>
);

export default About;
