import { BiDownload } from 'react-icons/bi';
import style from './style.module.scss';
import '../../scss/globals.scss';

const About = () => (
  <div className="">
    <h2 className="heading">About</h2>
   
    
      <p>

        Hello, I am Farid, a full-stack software engineer
        who specialises in using Flutter, Firebase and
        JavaScript to build software solutions for businesses.
        I am in the top 1% of active GitHub users in my
        country, which is something I am really proud of.
        I then developed an application for Case Medical
        Insurance that shows their clients the nearest
        health provider to visit in order to access healthcare.
        I also developed and published an application that got
        over 1000 downloads called Painter which is used
        mainly by kids to paint.
        I then joined Microverse which is a remote
        development school where I am learning to work
        remotely and pair-program with people across
        different time zones.At Microverse,
        I built various projects like the blo app for
        task management and the website for the Pearl of Africa Tour.
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
