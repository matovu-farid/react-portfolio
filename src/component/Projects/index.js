import { useSelector } from 'react-redux';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Project from '../Project';

const MyCarousal = ({ data }) => (
  <div className="w-100">
    <Carousel
      showStatus={false}
      infiniteLoop
      autoPlay
      className="w-full md:w-4/5 bg-slate-800 text-white mx-auto  rounded-2xl"
    >
      {data.map((item) => (
        <Project key={item.name} item={item} />
      ))}
    </Carousel>
  </div>
);

const Projects = () => {
  const data = useSelector((state) => state.project);
  return (
    <div id="projects" className="md:h-screen">
      <MyCarousal data={data} />
    </div>
  );
};

export default Projects;
