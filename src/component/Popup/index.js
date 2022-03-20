import propTypes from 'prop-types';
import { BsBoxArrowUpRight, BsGithub } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';
import style from './style.module.scss';

const Popup = ({
  project, close, display,
}) => {
  const openInNewtab = (url) => window.open(url, '_blank');
  return (
    <section style={display} className={style.popup}>

      <div className={`content ${style.content}`}>

        <div className="close">

          <GrClose onClick={close} />
        </div>

        <h3 className={style.title}>{project.name}</h3>
        <ul className={style.tags}>
          {project.tags.map((tag) => (<li key={tag} className={style.tag}>{tag}</li>))}
        </ul>
        <img src={project.image} alt={project.name} />
        <section className={style.info}>
          <div>

            <p>{project.description}</p>
            <div className={style.buttons}>

              <button onClick={() => openInNewtab(project.live)} type="button" className={style.button}>
                <span>See Live</span>
                <span><BsBoxArrowUpRight /></span>
              </button>
              <button onClick={() => openInNewtab(project.github)} type="button" className={style.button}>
                <span>See Source</span>
                <span><BsGithub /></span>
              </button>
            </div>
          </div>

        </section>

      </div>
    </section>
  );
};

Popup.propTypes = {
  project: propTypes.instanceOf(Object).isRequired,
  close: propTypes.func.isRequired,
  display: propTypes.instanceOf(Object).isRequired,
};

export default Popup;
