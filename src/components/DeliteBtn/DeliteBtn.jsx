import { Btn } from './DeliteBtn.styled';
import PropTypes from 'prop-types';

const DeliteBtn = ({ delite, ...ariaParam }) => {
  return (
    <Btn onClick={delite} {...ariaParam}>
      Delete all contacts
    </Btn>
  );
};

export default DeliteBtn;

DeliteBtn.propTypes = {
  onClick: PropTypes.func,
};
