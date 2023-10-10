import PropTypes from 'prop-types';
import { Component } from 'react';

import { Backdrop, ModalContent } from './Modal.styled';

class Modal extends Component {
  onClickEsc = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  componentDidMount() {
    window.addEventListener('keydown', this.onClickEsc);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.onClickEsc);
  }

  onClickBackdrop = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <Backdrop onClick={this.onClickBackdrop}>
        <ModalContent>{this.props.children}</ModalContent>
      </Backdrop>
    );
  }
}

export default Modal;

Modal.propTypes = {
  onClose: PropTypes.func,
};
