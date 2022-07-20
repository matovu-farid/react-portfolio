import { useState } from 'react';
import { DummyImage } from 'react-simple-placeholder-image';

function Project({ item }) {
  const [loaded, setLoaded] = useState(false);
  const imageStyle = (loaded) => (loaded ? 'w-full h-full object-fill md:object-contain ' : 'hidden');
  return (
    <div className="container mx-auto md:p-16">
      <div className="flex gap-2 flex-col md:flex-row">
        <div className="w-full h-56 md:h-96">
          {

          (loaded) || <DummyImage className="w-full h-full" shape="image" />

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
            <div className="flex flex-row gap-2 mx-auto">

              <a href={item.github} target="_blank" className="cursor-pointer bg-white  hover:bg-orange-400 text-gray-900 font-bold py-2 px-4 rounded inline-flex items-center" rel="noreferrer">
                Github
              </a>
              {

              (item.live) && (
                <a href={item.live} target="_blank" className="cursor-pointer bg-white  hover:bg-orange-400 text-gray-900 font-bold py-2 px-4 rounded inline-flex items-center" rel="noreferrer">
                  Live
                </a>
              )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Project;
