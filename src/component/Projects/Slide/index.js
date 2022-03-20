import propTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { BsArrowRight } from 'react-icons/bs';
import style from './style.module.scss';

const Slide = ({ children }) => {
  const ref = useRef();
  const slideRef = useRef();
  const [position, setPosition] = useState(0);
  const [screenSize, setScreenSize] = useState(document.body.clientWidth);
  const [listSize, setListSize] = useState();
  const [slideSize, setSlideSize] = useState();
  const setSizes = () => {
    const width = document.body.clientWidth;
    if (width > 800) {
      setListSize(ref.current.clientWidth);
      setSlideSize(slideRef.current.clientWidth);
    } else {
      setListSize(ref.current.clientHeight);
      setSlideSize(slideRef.current.clientHeight);
    }
  };
  useEffect(() => {
    if (ref.current) {
      setSizes();
    }
  }, [ref.current]);
  window.onresize = () => {
    const width = document.body.clientWidth;
    setSizes();
    return setScreenSize(width);
  };
  const max = ((listSize / slideSize) * 100);
  const INCREMENT = 50;
  const positionReset = ((listSize - slideSize) / slideSize) * 100;
  const next = () => {
    const value = position - INCREMENT;

    if (Math.abs(value) > max) {
      setPosition(-positionReset);
    } else setPosition(value);
  };
  const back = () => {
    const value = position + INCREMENT;

    if (Math.abs(value) > max) setPosition(positionReset);
    else setPosition(value);
  };

  return (

    (
      <div className={style.controls}>
        <BiArrowBack className={style.control} onClick={back} />
        <div ref={slideRef} className={style.slide}>
          <ul
            ref={ref}
            style={{

              transform: (screenSize > 800) ? `translateX(${position}%)`
                : `translateY(${position}%)`,
            }}
            className={style.list}
          >
            {children}
          </ul>
        </div>
        <BsArrowRight className={style.control} onClick={next} />
        <div className={style['verticle-buttons']}>
          <button className="purple-btn" type="button" onClick={back}>Previous</button>
          <button className="purple-btn" type="button" onClick={next}>Next</button>
        </div>
      </div>
    )
  );
};

Slide.propTypes = {
  children: propTypes.instanceOf(Object).isRequired,
};

export default Slide;
