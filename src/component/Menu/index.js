import { GrClose } from 'react-icons/gr';
import propTypes from 'prop-types';
import style from './style.module.scss';
import Navlist from './Navlist';

const Menu = ({ close }) => (
  <>
    <div className={`${style.menu} flex fixed`}>
      <div className="content">

        <div className="close z-10">
          <GrClose onClick={close} />
        </div>
        <Navlist close={close} />
      </div>
      <div className={style.divider} />
    </div>
  </>
);

Menu.propTypes = {
  close: propTypes.func.isRequired,
};

export default Menu;
