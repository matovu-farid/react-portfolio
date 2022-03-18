import propTypes from 'prop-types';
import style from './style.module.scss';

const Navlist = ({ close }) => {
  const navigateTo = (url) => {
    window.open(url, '_self');
    close();
  };
  return (
    <ul className={style.list}>
      <li>
        <button className="text-button" onClick={() => navigateTo('#hero')} type="button">Hello</button>
      </li>
      <li>
        <button className="text-button" onClick={() => navigateTo('#projects')} type="button">Portfolio</button>
      </li>
      <li>
        <button className="text-button" onClick={() => navigateTo('#about')} type="button">About</button>
      </li>
      <li>
        <button className="text-button" onClick={() => navigateTo('#contact')} type="button">Contact</button>
      </li>
    </ul>
  );
};

Navlist.propTypes = {
  close: propTypes.func.isRequired,
};
export default Navlist;
