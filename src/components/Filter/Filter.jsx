import { Input } from 'components/Filter/Filter.styled';
import PropTypes from 'prop-types';

const Filter = ({ value, handleInputChange }) => {
  return (
    <>
      <p> Find contact by name</p>
      <Input
        type="text"
        name="filter"
        value={value}
        onChange={handleInputChange}
      />
    </>
  );
};
export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func,
};
