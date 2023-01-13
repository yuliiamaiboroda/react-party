import { useState } from 'react';
import Box from 'components/Box';
import { Dropdown, Option } from './ModalSelect.styled';
import { TRANSACTION_TYPE } from 'constantes';

export default function ModalSelect({ options, onChange }) {
  const [isShown, setIsShown] = useState(false);
  const [choosedCategory, setChoosedCategory] = useState('');

  const handleOpenDropdown = event => {
    console.log('e.cT: ', event.currentTarget);
    console.log('e.t: ', event.target);
    if (event.currentTarget === event.target) {
      setIsShown(!isShown);
    }
  };

  return (
    <Box
      position="relative"
      width="100%"
      maxWidth="400px"
      height="32px"
      backgroundColor="teal"
      onClick={handleOpenDropdown}
    >
      <p>{choosedCategory}</p>
      {isShown && (
        <Dropdown>
          {options.map(({ id, name }) => (
            <Option
              key={id}
              id={id}
              onClick={() => {
                setIsShown(false);
                setChoosedCategory(name);
                onChange(id);
              }}
            >
              <p>{name}</p>
            </Option>
          ))}
        </Dropdown>
      )}
    </Box>
  );
}
