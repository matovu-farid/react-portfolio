import { useSelector } from 'react-redux';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Project from '../Project';

const MyCarousal = ({ data }) => (
  <div className="w-100">
    <Carousel
      showStatus={false}
      infiniteLoop
      className="w-4/5 bg-slate-800 text-white mx-auto p-4 rounded-2xl"

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
