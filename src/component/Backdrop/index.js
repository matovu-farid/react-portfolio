import propTypes from 'prop-types';
import style from './style.module.scss';

const Backdrop = ({ display, mystyle }) => (
  <div
    style={{
      height: document.body.clientHeight,
      display,
    }}
    className={style[mystyle]}
  />
);

Backdrop.propTypes = {
  display: propTypes.string.isRequired,
  mystyle: propTypes.string.isRequired,
};

export default Backdrop;
