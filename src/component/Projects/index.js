import { useSelector } from 'react-redux';
import Carousel from 'react-material-ui-carousel';
import { DummyImage } from 'react-simple-placeholder-image';
import { useState } from 'react';
import style from './style.module.scss';

function Item({ item }) {
  const [loaded, setLoaded] = useState(false);
  const imageStyle = (loaded) => (loaded ? 'w-full h-full object-fill' : 'hidden');
  return (
    <div className="container mx-auto shadow-2xl">
      <div className="flex gap-2 flex-col md:flex-row">
        <div className="w-full h-96">
          {

          (loaded)
            ? null
            : <DummyImage className="w-full h-full" shape="image" />

          }
          <img
            className={imageStyle(loaded)}
            src={item.image}
            alt={item.name}
            onLoad={() => {
              setLoaded(true);
            }}
          />
        </div>

        <div className="max-w-lg  my-auto">
          <h2>{item.name}</h2>

          <p>{item.description}</p>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center">
        <a href={item.github} target="_blank" className="mx-auto cursor-pointer bg-gray-900 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded inline-flex items-center" rel="noreferrer">
          Github
        </a>
      </div>
    </div>
  );
}
const MyCarousal = ({ data }) => (
  <div>
    <Carousel
      className={style['center-project']}
      navButtonsProps={{
        style: {
          opacity: 1,
        },
      }}
    >

      {
          data.map((item) => <Item key={item.name} item={item} />)
            }
    </Carousel>
  </div>
);

const Projects = () => {
  const data = useSelector((state) => state.project);
  return (
    <MyCarousal
      data={data}
    />
  );
};

export default Projects;
