import { useSelector } from 'react-redux';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { SpinnerRoundOutlined } from 'spinners-react';

import Project from '../Project';

const MyCarousal = ({ data }) => (
  <div className="relative w-100">
    <Carousel
      showStatus={false}
      infiniteLoop
      autoPlay
      interval={5000}
      transitionTime={1000}
      renderThumbs={() => data.map((item) => (
        <img
          className="mx-auto"
          key={item.name}
          alt={item.name}
          src={item.image}
        />
      ))}
      className="w-full md:w-4/5 text-white bg-gray-800 mx-auto  rounded-2xl overflow-hidden"
    >
      {data.map((item) => (
        <Project key={item.name} item={item} />
      ))}
    </Carousel>
  </div>
);

const Projects = () => {
  const { all: projects, loading } = useSelector((state) => state.projects);
  return (
    <section
      id="projects"
      className="md:h-screen flex flex-col align-middle justify-center"
    >
      <SpinnerRoundOutlined
        className="mx-auto my-auto h-100 "
        enabled={loading}
      />

      <MyCarousal data={projects} />
    </section>
  );
};

export default Projects;
