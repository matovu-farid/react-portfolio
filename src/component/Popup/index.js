import propTypes from 'prop-types';
import { BsBoxArrowUpRight, BsGithub } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';
import style from './style.module.scss';

const Popup = ({
  name, description, tags, image, close, display, live, github,
}) => {
  const openInNewtab = (url) => window.open(url, '_blank');
  return (
    <section style={display} className={style.popup}>

      <div className={`content ${style.content}`}>

        <div className="close">

          <GrClose onClick={close} />
        </div>

        <h3 className={style.title}>{name}</h3>
        <ul className={style.tags}>
          {tags.map((tag) => (<li key={tag} className={style.tag}>{tag}</li>))}
        </ul>
        <img src={image} alt={name} />
        <section className={style.info}>
          <div>

            <p>{description}</p>
            <div className={style.buttons}>

              <button onClick={() => openInNewtab(live)} type="button" className={style.button}>
                <span>See Live</span>
                <span><BsBoxArrowUpRight /></span>
              </button>
              <button onClick={() => openInNewtab(github)} type="button" className={style.button}>
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
  display: propTypes.instanceOf(Object).isRequired,
  name: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  tags: propTypes.instanceOf(Array).isRequired,
  image: propTypes.string.isRequired,
  close: propTypes.func.isRequired,
  live: propTypes.string.isRequired,
  github: propTypes.string.isRequired,
};

export default Popup;
