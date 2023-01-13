import { PropTypes } from 'prop-types';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { HiX } from 'react-icons/hi';
import Box from 'components/Box';
import { CloseModalBtn } from './Modal.styled';

const portal = document.getElementById('modal-root');
const ESCAPE_CODE = 'Escape';

export default function Modal({ onClose, children }) {
  useEffect(() => {
    const escapeModal = event => {
      if (event.code === ESCAPE_CODE) {
        event.preventDefault();
        onClose();
      }
    };
    window.addEventListener('keydown', escapeModal);

    return () => {
      window.removeEventListener('keydown', escapeModal);
    };
  });

  const handleClose = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <Box
      onClick={handleClose}
      position="fixed"
      top="0"
      left="0"
      width="100%"
      height="100%"
      zIndex="9999"
      display="flex"
      justifyContent="center"
      alignItems="center"
      backgroundColor="backdropBg"
      overflow="auto"
      p={[0, 3]}
    >
      <Box
        position="relative"
        minWidth={['100%', '200px']}
        minHeight={['100%', '200px']}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        p={[0, 4]}
        backgroundColor="lightBg"
        borderRadius={['none', 'light']}
        m="auto"
        overflow={['auto', 'visible']}
      >
        <CloseModalBtn type="button" onClick={handleClose}>
          <HiX style={{ pointerEvents: 'none' }} />
        </CloseModalBtn>
        {children}
      </Box>
    </Box>,
    portal
  );
}

Modal.propTypes = {
  onClose: PropTypes.func,
  children: PropTypes.node,
};
