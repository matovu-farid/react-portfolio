import { GrClose } from 'react-icons/gr';
import propTypes from 'prop-types';
import style from './style.module.scss';

const Menu = ({ close }) => {
  const navigateTo = (url) => {
    window.open(url, '_self');
    close();
  };

  return (
    <div className={style.menu}>
      <div className="content">

        <div className="close">
          <GrClose onClick={close} />
        </div>
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
      </div>
      <div className={style.divider} />
    </div>
  );
};

Menu.propTypes = {
  close: propTypes.func.isRequired,
};

export default Menu;
