import propTypes from 'prop-types';

const Navlist = ({ close }) => {
  const navigateTo = (url) => {
    window.open(url, '_self');
    close();
  };
  const linkStyles = 'hover:border-b-2 border-gray-900';
  return (
    <ul className="md:fixed md:shadow-md z-10 bg-white w-full flex flex-col md:flex-row align-middle md:justify-center text-xl md:text-3xl min-h-screen md:min-h-0">

      <li className="hover:border-b-2 border-gray-900">
        <button className="text-button" onClick={() => navigateTo('#hero')} type="button">Hello</button>
      </li>
      <li className={linkStyles}>
        <button className="text-button" onClick={() => navigateTo('#about')} type="button">About</button>
      </li>
      <li className={linkStyles}>
        <button className="text-button" onClick={() => navigateTo('#projects')} type="button">Projects</button>
      </li>
      <li className={linkStyles}>
        <button className="text-button" onClick={() => navigateTo('#contact')} type="button">Contact</button>
      </li>
    </ul>
  );
};

Navlist.propTypes = {
  close: propTypes.func.isRequired,
};
export default Navlist;
