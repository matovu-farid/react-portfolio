import { useParams } from 'react-router-dom';
import BackButton from '../../component/BackButton';
import Footer from '../../component/Footer';
import ProjectInfo from '../../component/ProjectInfo';
import useData from '../../Hooks/useData';
import style from './style.module.scss';

const ProjectPage = () => {
  const data = useData();
  const { id } = useParams();
  const project = data.find((obj) => obj.id === id);
  return (
    <div>
      <div className={style.page}>

        <BackButton />
        <ProjectInfo project={project} />
      </div>
      <Footer />
    </div>
  );
};

export default ProjectPage;
