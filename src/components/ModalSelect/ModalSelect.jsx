import { PropTypes } from 'prop-types';
import Select from 'react-select';
import {
  container,
  control,
  valueContainer,
  indicatorsContainer,
  indicatorSeparator,
  menu,
  menuList,
  option,
  placeholder,
  dropdownIndicator,
  theme,
} from './ModalSelectStyles';

export default function ModalSelect({ options, onSelect }) {
  return (
    <Select
      options={options}
      onChange={onSelect}
      styles={{
        container,
        control,
        valueContainer,
        indicatorsContainer,
        indicatorSeparator,
        menu,
        menuList,
        option,
        placeholder,
        dropdownIndicator,
      }}
      theme={theme}
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
