import { useSelector } from 'react-redux';
import Carousel from 'react-material-ui-carousel';
import style from './style.module.scss';

function Item({ item }) {
  return (
    <div>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <img className={style.projectimg} src={item.image} alt="" />
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
