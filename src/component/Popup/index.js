import propTypes from 'prop-types';
import { BsBoxArrowUpRight, BsGithub } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';
import style from './style.module.scss';

const Popup = ({
  name, description, tags, image, close, live, github,
}) => {
  const openInNewtab = (url) => window.open(url, '_blank');
  return (
    <div className={`content ${style.popup}`}>

      <div className="close">

        <GrClose onClick={close} />
      </div>

      <h3 className={style.title}>{name}</h3>
      <ul className={style.tags}>
        {tags.map((tag) => (<li key={tag} className={style.tag}>{tag}</li>))}
      </ul>
      <img src={image} alt={name} />
      <p>{description}</p>
      <div className="buttons">

        <button onClick={() => openInNewtab(live)} type="button" className={style.button}>
          <span>See Live</span>
          <span><BsBoxArrowUpRight /></span>
        </button>
        <button onClick={() => openInNewtab(github)} type="button" className={style.button}>
          <span>See Live</span>
          <span><BsGithub /></span>
        </button>
      </div>

    </div>
  );
};

Popup.propTypes = {
  name: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  tags: propTypes.instanceOf(Array).isRequired,
  image: propTypes.string.isRequired,
  close: propTypes.func.isRequired,
  live: propTypes.string.isRequired,
  github: propTypes.string.isRequired,
};

export default Popup;
