import { useDispatch } from 'react-redux';
import { signOut } from 'redux/authController/authController-operations';
import Modal from 'components/Modal';
import Box from 'components/Box';
import { useCloseModalLogout } from 'hooks';
import { Title, LogoutButton, CancelButton } from './ModalLogout.styled';

export default function ModalLogout() {
  const dispatch = useDispatch();
  const closeModal = useCloseModalLogout();

  const handleLogout = () => {
    dispatch(signOut());
    closeModal();
  };
  return (
    <Modal onClose={closeModal}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        px={[3, 4]}
        height="100%"
      >
        <Title>Are you sure you want to log out?</Title>
        <Box display="flex" justifyContent="center" flexWrap="wrap" gridGap={3}>
          <LogoutButton type="button" onClick={handleLogout}>
            Log out
          </LogoutButton>
          <CancelButton type="button" onClick={closeModal}>
            Cancel
          </CancelButton>
        </Box>
      </Box>
    </Modal>
  );
}
