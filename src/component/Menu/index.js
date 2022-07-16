import { GrClose } from 'react-icons/gr';
import propTypes from 'prop-types';
import style from './style.module.scss';
import Navlist from './Navlist';

const Menu = ({ display, close }) => (
  <>
    <div style={{ display }} className={`${style.menu} fixed`}>
      <div className="content">

        <div className="close">
          <GrClose onClick={close} />
        </div>
        <Navlist close={close} />
      </div>
      <div className={style.divider} />
    </div>
  </>
);

Menu.propTypes = {
  display: propTypes.string.isRequired,
  close: propTypes.func.isRequired,
};

export default Menu;
