import { useState } from 'react';

const usePopup = () => {
  const [display, setDisplay] = useState('none');
  const [modal, setModal] = useState('');

  const close = () => {
    setDisplay('none');
    setModal('');
  };
  const seeMore = () => {
    setDisplay('flex');
    setModal(
      'backdrop',
    );
  };

  return {
    display,
    modal,
    close,
    seeMore,
  };
};
export default usePopup;
