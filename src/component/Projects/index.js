import { useSelector } from 'react-redux';
import Carousel from 'react-material-ui-carousel';
import style from './style.module.scss';

function Item({ item }) {
  return (
    <div className="container mx-auto">
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <img className={style.projectimg} src={item.image} alt="" />
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
