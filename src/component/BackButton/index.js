import { BiArrowBack } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import style from './style.module.scss';

const BackButton = () => {
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };
  return (
    <BiArrowBack className={`button ${style.back}`} onClick={back} />
  );
};

export default BackButton;
