import { GrClose } from 'react-icons/gr';
import propTypes from 'prop-types';
import style from './style.module.scss';

const Menu = ({ display, close }) => (
  <div style={{ display }} className={style.menu}>
    <div className="content">

      <div className="close">
        <GrClose onClick={close} />
      </div>
      <ul className={style.list}>
        <li>
          <a href="#hero">Hello</a>
        </li>
        <li>
          <a href="#projects">Portfolio</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
    <div className={style.divider} />
  </div>
);

Menu.propTypes = {
  display: propTypes.string.isRequired,
  close: propTypes.func.isRequired,
};

export default Menu;
