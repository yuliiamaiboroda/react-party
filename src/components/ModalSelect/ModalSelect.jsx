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
import { useTranslation } from 'react-i18next';

export default function ModalSelect({ options, onSelect }) {
  const { t } = useTranslation();
  return (
    <Select
      options={options}
      onChange={onSelect}
      placeholder={t('addTrans.placeholderCat')}
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
