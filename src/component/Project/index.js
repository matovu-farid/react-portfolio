import { BsArrowRight } from 'react-icons/bs';
import style from './style.module.scss';
import Image from './laptop.png';

const Project = () => (
  <div className={style.project}>
    <div className={style.image}>

      <img src={Image} alt="project" />
    </div>

    <div className={style.footer}>
      <h3>Project name goes here</h3>
      <ul className={style.tags}>
        <li>HTML/CSS</li>
        <li>Ruby on Rails</li>
        <li>JavaScript</li>
      </ul>
      <button className={style.button} type="button">
        <span>See this project</span>
        <span><BsArrowRight /></span>
      </button>

    </div>

  </div>
);

export default Project;
