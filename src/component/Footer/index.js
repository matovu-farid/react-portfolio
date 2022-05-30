import { FaAngellist } from 'react-icons/fa';
import { AiFillGithub, AiOutlineMedium } from 'react-icons/ai';
import { BsTwitter, BsLinkedin, BsBoxArrowUpRight } from 'react-icons/bs';
import style from './style.module.scss';

const Footer = () => (
  <footer className={style.footer}>
    <a className={style.button} type="button" href="https://drive.google.com/uc?export=download&id=1IPAv-ij0JsEhFCDiw6g8n_YuIyGvGTQE" download>
      <span>Get my Resume</span>
      <span><BsBoxArrowUpRight /></span>
    </a>
    <div className={`${style.links} flex`}>
      <AiFillGithub />
      <BsTwitter />
      <BsLinkedin />
      <FaAngellist />
      <AiOutlineMedium />
    </div>
  </footer>
);

export default Footer;
