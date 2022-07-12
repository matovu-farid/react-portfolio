import style from './style.module.scss';
import '../../scss/globals.scss';
import Lang from './lang.png';
import Frame from './frame.png';
import Skills from './skills.png';
import AboutCard from './AboutCard';

const AboutCards = () => {
  const objects = [
    {
      title: 'Languages',
      image: Lang,
      items: ['JavaScript', 'TypeScript', 'Ruby', 'Dart', 'Python'],
      color: '#1C528A',
    },
    {
      title: 'Skills',
      image: Frame,
      items: ['Ruby on rails', 'React', 'Flutter', 'Nextjs', 'Sql'],
      color: '#E2505C',
    },
    {
      title: 'Extra Skills',
      image: Skills,
      items: ['Github', 'TDD', 'Responsive Design'],
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
