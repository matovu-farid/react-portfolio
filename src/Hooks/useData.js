import { useState } from 'react';
import Image from './laptop.png';

const useData = () => {
  const array = [
    {
      id: '1',
      name: 'Name goes here',
      description: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
    ullamco laboris nisi Ut aliquip ex ea commodo consequat. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
    ullamco laboris nisi.`,
      tags: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
      image: Image,
      live: '',
      github: '',

    },
    {
      id: '2',
      name: 'Name goes here',
      description: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
    ullamco laboris nisi Ut aliquip ex ea commodo consequat. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
    ullamco laboris nisi.`,
      tags: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
      image: Image,
      live: '',
      github: '',

    },
    {
      id: '3',
      name: 'Name goes here',
      description: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
    ullamco laboris nisi Ut aliquip ex ea commodo consequat. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
    ullamco laboris nisi.`,
      tags: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
      image: Image,
      live: '',
      github: '',

    },
    {
      id: '3',
      name: 'Name goes here',
      description: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
    ullamco laboris nisi Ut aliquip ex ea commodo consequat. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
    ullamco laboris nisi.`,
      tags: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
      image: Image,
      live: '',
      github: '',

    },
  ];
  const [data] = useState(array);
  return data;
};
export default useData;
