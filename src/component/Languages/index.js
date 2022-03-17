import style from './style.module.scss';
import '../../scss/globals.scss';

const Languages = () => (
  <div className="content">
    <div className={style.items}>

      <h2>Languages</h2>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>Ruby</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
    </div>
  </div>
);

export default Languages;
