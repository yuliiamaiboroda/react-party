import { PropTypes } from 'prop-types';
import Select from 'react-select';
import {
  container,
  control,
  placeholder,
  indicatorSeparator,
  dropdownIndicator,
  menu,
  menuList,
  option,
} from './ModalSelectStyles';

export default function ModalSelect({ options, onSelect }) {
  return (
    <Select
      options={options}
      onChange={onSelect}
      placeholder="Select a category"
      styles={{
        container,
        control,
        placeholder,
        indicatorSeparator,
        dropdownIndicator,
        menu,
        menuList,
        option,
      }}
    />
  );
}

ModalSelect.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSelect: PropTypes.func.isRequired,
};
