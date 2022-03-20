import { FaAngellist } from 'react-icons/fa';
import { AiFillGithub, AiOutlineMedium } from 'react-icons/ai';
import { BsTwitter, BsLinkedin, BsBoxArrowUpRight } from 'react-icons/bs';
import style from './style.module.scss';

const Footer = () => (
  <footer className={style.footer}>
    <button className={style.button} type="button">
      <span>Get my Resume</span>
      <span><BsBoxArrowUpRight /></span>
    </button>
    <div className={style.links}>
      <AiFillGithub />
      <BsTwitter />
      <BsLinkedin />
      <FaAngellist />
      <AiOutlineMedium />
    </div>
  </footer>
);

export default Footer;
