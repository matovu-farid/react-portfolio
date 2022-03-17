import style from './style.module.scss';
import '../../scss/globals.scss';
import AboutCard from '../AboutCard';
import Lang from './lang.png';
import Frame from './frame.png';
import Skills from './skills.png';

const AboutCards = () => {
  const objects = [
    {
      title: 'Languages',
      image: Lang,
      items: ['JavaScript', 'Ruby', 'HTML', 'CSS', 'React'],
      color: '#1C528A',
    },
    {
      title: 'Frameworks',
      image: Frame,
      items: ['Ruby on rails', 'React', 'Flutter'],
      color: '#E2505C',
    },
    {
      title: 'Skills',
      image: Skills,
      items: ['Github', 'Codepen', 'TDD', 'Responsive Design', 'Terminal'],
      color: '#FEBF52',
    },
  ];
  return (
    <ul className={style.cards}>
      {
        objects.map(({
          title, image, items, color,
        }) => (
          <li key={title}>

            <AboutCard
              list={items}
              color={color}
              title={title}
              image={image}
            />
          </li>
        ))
      }
    </ul>
  );
};

export default AboutCards;
