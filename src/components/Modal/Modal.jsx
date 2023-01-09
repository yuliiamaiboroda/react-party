import { PropTypes } from 'prop-types';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
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
      p={3}
    >
      <Box
        position="relative"
        minWidth="200px"
        minHeight="200px"
        p={3}
        backgroundColor="lightBg"
        borderRadius="light"
        m="auto"
      >
        <CloseModalBtn type="button" onClick={handleClose}>
          X
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
