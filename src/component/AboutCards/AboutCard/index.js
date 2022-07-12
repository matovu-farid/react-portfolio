import '../../../scss/globals.scss';

import propTypes from 'prop-types';
import style from './style.module.scss';

const AboutCard = ({
  list, color, image, title,
}) => (
  <div className={`content ${style.card} hover:scale-110 transition`}>
    <div
      className={style['about-item']}
      style={{

        background: `url(${image}) no-repeat right bottom,${color}`,
        backgroundSize: '30%, cover',
        height: '100%',
      }}
    >

      <h2>{title}</h2>
      <ul>
        {
          list.map((item) => (
            <li
              key={item}

            >
              {item}

            </li>
          ))
        }
      </ul>
    </div>
  </div>
);
AboutCard.propTypes = {
  list: propTypes.instanceOf(Array).isRequired,
  color: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
};
export default AboutCard;
