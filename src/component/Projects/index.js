import { useRef } from 'react';
import { useSelector } from 'react-redux';
import style from './style.module.scss';
import Project from '../Project';

import Slide from './Slide';

const Projects = () => {
  const data = useSelector((state) => state.project);

  // useEffect(() => {
  //   setData(projects);
  // }, [projects]);

  const ref = useRef();

  return (
    <section id="projects" className={`${style['projects-section']} section`}>
      <h3 className="heading">Projects</h3>
      <Slide refe={ref}>

        {data.map((project) => (

          <li ref={ref} key={project.id}>

            <Project project={project} />
          </li>
        ))}
      </Slide>
    </section>
  );
};

export default Projects;
