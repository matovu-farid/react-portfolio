import { v4 } from 'uuid';
import style from './style.module.scss';
import Project from '../../Project';
import Image from './laptop.png';

const data = [
  {
    id: v4(),
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
    id: v4(),
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
    id: v4(),
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
const Projects = () => (
  <div id="projects" className={style['projects-section']}>
    <h3 className="heading">Projects</h3>
    <ul className={style.projects}>

      {
      data.map((project) => (
        <li key={project.id}>

          <Project project={project} />
        </li>
      ))
    }
    </ul>
  </div>
);

export default Projects;
