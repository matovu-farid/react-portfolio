import { useState } from 'react';
import { DummyImage } from 'react-simple-placeholder-image';

function Project({ item }) {
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
export default Project;
