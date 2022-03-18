import style from './style.module.scss';
import Project from '../Project';

const Projects = () => (
  <div id="projects" className={style.projects}>
    <h3 className="heading">Projects</h3>
    <Project />
  </div>
);

export default Projects;
