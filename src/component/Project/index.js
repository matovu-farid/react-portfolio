import { useState } from 'react';
import { DummyImage } from 'react-simple-placeholder-image';

function Project({ item }) {
  const [loaded, setLoaded] = useState(false);
  const imageStyle = (loaded) => (loaded ? 'w-full h-full object-fill ' : 'hidden');
  return (
    <div className="container mx-auto p-16">
      <div className="flex gap-2 flex-col md:flex-row">
        <div className="w-full h-56 md:h-96">
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

          <div className="w-full flex flex-col justify-center ">
            <p>{item.description}</p>
            <a href={item.github} target="_blank" className="mx-auto cursor-pointer bg-white  hover:bg-orange-400 text-gray-900 font-bold py-2 px-4 rounded inline-flex items-center" rel="noreferrer">
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Project;
