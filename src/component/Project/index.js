import { BsArrowRight } from 'react-icons/bs';
import propTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import style from './style.module.scss';

const Project = ({
  project,
}) => {
  const navigate = useNavigate();
  const seePoject = () => {
    navigate(`/projects/${project.id}`);
  };

  return (
    <>
      <div className={style.project}>

        <div className={style['project-section']}>

          <div className={style.image}>

            <img src={project.image} alt="project" />
          </div>

          <div className={style.footer}>
            <h3>{project.name}</h3>
            <ul className={style.tags}>
              {
            project.tags.map((tag) => (<li key={tag}>{tag}</li>))
          }
            </ul>
            <button className={style.button} onClick={seePoject} type="button">
              <span>See this project</span>
              <span><BsArrowRight /></span>
            </button>

          </div>

        </div>
      </div>
    </>
  );
};

Project.propTypes = {
  project: propTypes.instanceOf(Object).isRequired,
};

export default Project;
