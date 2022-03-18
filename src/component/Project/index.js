import { BsArrowRight } from 'react-icons/bs';
import { useRef } from 'react';
import style from './style.module.scss';
import Image from './laptop.png';
import Popup from '../Popup';

const Project = () => {
  const {
    name, description, tags, image, link, live, github,
  } = {
    name: 'Name goes here',
    description: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
    ullamco laboris nisi Ut aliquip ex ea commodo consequat. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
    ullamco laboris nisi.`,
    tags: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    image: Image,
    live: '',
    github: '',

  };
  const ref = useRef();
  const close = () => {
    ref.current.close();
  };
  const seeMore = () => {
    ref.current.showModal();
  };
  return (
    <div className={style.project}>
      <dialog ref={ref}>

        <Popup
          github={github}
          link={link}
          live={live}
          name={name}
          tags={tags}
          description={description}
          image={image}
          close={close}
        />
      </dialog>
      <div className={style.image}>

        <img src={image} alt="project" />
      </div>

      <div className={style.footer}>
        <h3>{name}</h3>
        <ul className={style.tags}>
          {
            tags.map((tag) => (<li key={tag}>{tag}</li>))
          }
        </ul>
        <button className={style.button} onClick={seeMore} type="button">
          <span>See this project</span>
          <span><BsArrowRight /></span>
        </button>

      </div>

    </div>
  );
};

export default Project;
