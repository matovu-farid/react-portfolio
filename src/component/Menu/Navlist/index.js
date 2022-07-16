import propTypes from 'prop-types';

const Navlist = ({ close }) => {
  const navigateTo = (url) => {
    window.open(url, '_self');
    close();
  };
  const links = [
    'hero', 'about', 'projects', 'contact',
  ];

  return (
    <ul className="md:fixed md:shadow-md z-10 bg-white w-full flex flex-col md:flex-row align-middle md:justify-center text-4xl md:text-3xl min-h-screen md:min-h-0">
      {
        links.map((link) => (

          <li key={link} className="hover:border-b-2 border-gray-900 p-3 active:bg-blend-darken  w-full md:w-14">
            <button
              className="text-button "
              onClick={() => navigateTo(`#${link}`)}
              type="button"
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}

            </button>
          </li>
        ))

      }

    </ul>
  );
};

Navlist.propTypes = {
  close: propTypes.func.isRequired,
};
export default Navlist;
