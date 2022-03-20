import propTypes from 'prop-types';
import { useRef, useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { BsArrowRight } from 'react-icons/bs';
import style from './style.module.scss';

const Slide = ({ children }) => {
  const ref = useRef();
  const slideRef = useRef();
  const [position, setPosition] = useState(0);
  const next = () => {
    const value = position - 500;
    const width = ref.current.clientWidth;
    const slideWidth = slideRef.current.clientWidth;

    if (Math.abs(value) > width) setPosition((width - slideWidth));
    else setPosition(value);
  };
  const back = () => {
    const value = position + 500;
    const width = ref.current.clientWidth;
    const slideWidth = slideRef.current.clientWidth;
    if (Math.abs(value) > width) setPosition(-(width - slideWidth));
    else setPosition(value);
  };
  const [screenSize, setScreenSize] = useState(document.body.clientWidth);
  window.onresize = () => {
    setScreenSize(document.body.clientWidth);
  };

  return (
    (screenSize >= 800)
      ? (
        <div className={style.controls}>
          <BiArrowBack className={style.control} onClick={back} />
          <div ref={slideRef} className={style.slide}>
            <ul
              ref={ref}
              style={{

                transform: `translateX(${position}px)`,
              }}
              className={style.list}
            >
              {children}
            </ul>
          </div>
          <BsArrowRight className={style.control} onClick={next} />
        </div>
      )
      : (
        <ul>
          {children}
        </ul>
      )
  );
};

Slide.propTypes = {
  children: propTypes.instanceOf(Object).isRequired,
};

export default Slide;
