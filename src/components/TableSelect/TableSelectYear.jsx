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

const optionsYear = [
  { value: 2019, label: '2019' },
  { value: 2020, label: '2020' },
  { value: 2021, label: '2021' },
  { value: 2022, label: '2022' },
  { value: 2023, label: '2023' },
];

const TableSelectYear = ({ onSelect }) => {
  return (
    <Select
      options={optionsYear}
      defaultValue={optionsYear[optionsYear.length-1]}
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

export default TableSelectYear;
