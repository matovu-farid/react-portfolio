import propTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { GrNext, GrPrevious } from 'react-icons/gr';
import style from './style.module.scss';

const Slide = ({ children }) => {
  const ref = useRef();
  const slideRef = useRef();
  const [position, setPosition] = useState(0);

  const [itemsLeft, setItemLeft] = useState(children.length - 1);

  const INCREMENT = 100;

  const next = () => {
    if (itemsLeft === 0) return;
    const value = position - INCREMENT;

    setPosition(value);
    setItemLeft(itemsLeft - 1);
  };

  const back = () => {
    if (itemsLeft === children.length - 1) return;
    const value = position + INCREMENT;

    setPosition(value);
    setItemLeft(itemsLeft + 1);
  };
  const [slideHeight, setSlideHeight] = useState(0);
  useEffect(() => {
    if (ref.current) {
      const height = ref.current.clientHeight;
      const newSlideHeight = height / (children.length);
      setSlideHeight(newSlideHeight);
    }
  }, [ref.current]);

  return (

    (
      <div className={style.controls}>
        <GrPrevious className={style.control} onClick={back} />
        <div
          style={{
            height: `${slideHeight}%`,
          }}
          ref={slideRef}
          className={style.slide}
        >

          <ul
            ref={ref}
            style={{

              transform: `translateX(${position}%)`,

            }}
            className={style.list}
          >
            {children}
          </ul>
        </div>
        <GrNext className={style.control} onClick={next} />
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
