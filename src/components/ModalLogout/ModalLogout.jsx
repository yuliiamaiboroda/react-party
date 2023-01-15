import { Notify } from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from 'redux/authController/authController-operations';
import { selectError } from 'redux/authController/authController-selectors';
import Modal from 'components/Modal';
import Box from 'components/Box';
import { useCloseModalLogout } from 'hooks';
import { Title, LogoutButton, CancelButton } from './ModalLogout.styled';

export default function ModalLogout() {
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const closeModal = useCloseModalLogout();

  const handleLogout = () => {
    dispatch(signOut());
  };

  if (error) {
    Notify.failure('Sorry, something went wrong. Please, try again.');
  }

  return (
    <Modal onClose={closeModal}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        my={['auto', 0]}
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
