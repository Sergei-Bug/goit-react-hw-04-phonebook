import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Backdrop, ModalContent } from './Modal.styled';

function Modal({ children, onClose }) {
  const onClickEsc = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', onClickEsc);
    return window.removeEventListener('keydown', onClickEsc);
  });

  const onClickBackdrop = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <Backdrop onClick={onClickBackdrop}>
      <ModalContent>{children}</ModalContent>
    </Backdrop>
  );
}

export default Modal;

Modal.propTypes = {
  onClose: PropTypes.func,
};
