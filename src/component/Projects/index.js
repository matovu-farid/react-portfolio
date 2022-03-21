import style from './style.module.scss';
import Project from '../Project';

import Slide from './Slide';
import useData from '../../Hooks/useData';

const Projects = () => {
  const data = useData();
  return (
    <section id="projects" className={style['projects-section']}>
      <h3 className="heading">Projects</h3>
      <Slide>

        {data.map((project) => (
          <li key={project.id}>

            <Project project={project} />
          </li>
        ))}
      </Slide>
    </section>
  );
};

export default Projects;
