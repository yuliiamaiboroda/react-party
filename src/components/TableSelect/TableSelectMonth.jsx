import Select from 'react-select';
import {
  container,
  valueContainer,
  input,
  control,
  indicatorSeparator,
  dropdownIndicator,
  menu,
  menuList,
  option,
} from './TableSelect.styled';
import { useTranslation } from 'react-i18next';

const TableSelectMonth = ({ onSelect }) => {
  const { t } = useTranslation();
  
  const optionsMonth = [
    { value: 1, label: t('month.january')},
    { value: 2, label: t('month.february')},
    { value: 3, label: t('month.march')},
    { value: 4, label: t('month.april')},
    { value: 5, label: t('month.may')},
    { value: 6, label: t('month.june')},
    { value: 7, label: t('month.july')},
    { value: 8, label: t('month.august')},
    { value: 9, label: t('month.september')},
    { value: 10, label: t('month.october')},
    { value: 11, label: t('month.november')},
    { value: 12, label: t('month.december')},
  ];
  
  // label: t(handlerCategories(name)),


  return (
    <Select
      options={optionsMonth}
      defaultValue={optionsMonth[0]}
      onChange={onSelect}
      styles={{
        container,
        valueContainer,
        input,
        control,
        indicatorSeparator,
        dropdownIndicator,
        menu,
        menuList,
        option,
      }}
    />
  );
};

export default TableSelectMonth;
