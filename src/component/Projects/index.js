import { useSelector } from 'react-redux';
import Carousel from 'react-material-ui-carousel';
import style from './style.module.scss';
import Project from '../Project';

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
          data.map((item) => <Project key={item.name} item={item} />)
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
