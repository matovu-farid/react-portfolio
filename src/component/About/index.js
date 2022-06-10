import { BiDownload } from 'react-icons/bi';
import style from './style.module.scss';
import '../../scss/globals.scss';

const About = () => (
  <div className="">
    <h2 className="heading">About</h2>
   
    
      <p>

        I am  full-stack software engineer
        who specialises in using Flutter, Firebase and
        JavaScript to build software solutions for businesses.
        Look below and swipe to see some of my projects
      </p>

   
    <a
      type="button"
      className={`bg-gray-900 text-white w-48 py-2 px-5 ${style.button}`}
      href="https://drive.google.com/uc?export=download&id=1IPAv-ij0JsEhFCDiw6g8n_YuIyGvGTQE"
      download
    >
      <span>Get my CV</span>
      <span><BiDownload /></span>
    </a>
  </div>
);

export default About;
