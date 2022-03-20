import { BsArrowRight } from 'react-icons/bs';
import propTypes from 'prop-types';
import style from './style.module.scss';
import Popup from '../Popup';
import Backdrop from '../Backdrop';
import usePopup from '../../Hooks/usePopup';

const Project = ({
  project,
}) => {
  const {
    display, modal, close, seeMore,
  } = usePopup();

  return (
    <>
      <Backdrop
        display={display}
        mystyle={modal}
      />
      <div className={style.project}>

        <Popup
          display={{
            display,
          }}
          project={project}
          close={close}
        />
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
            <button className={style.button} onClick={seeMore} type="button">
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
