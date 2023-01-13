import { useState } from 'react';
import Box from 'components/Box';
import { Dropdown, Option } from './ModalSelect.styled';

export default function ModalSelect() {
  const [isShown, setIsShown] = useState(false);
  return (
    <Box
      position="relative"
      width="100%"
      maxWidth="400px"
      height="32px"
      backgroundColor="teal"
      onClick={() => setIsShown(!isShown)}
    >
      {isShown && (
        <Dropdown>
          <Option></Option>
          <Option></Option>
          <Option></Option>
          <Option></Option>
          <Option></Option>
        </Dropdown>
      )}
    </Box>
  );
}
