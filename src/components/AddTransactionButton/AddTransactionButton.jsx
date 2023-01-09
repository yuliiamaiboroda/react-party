import { useState } from 'react';
import { HiOutlinePlus } from 'react-icons/hi';
import Modal from 'components/Modal';
import { AddButton } from './AddTransactionButton.styled';

export default function AddTransactionButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <AddButton type="button" onClick={toggleModal}>
        <HiOutlinePlus style={{ pointerEvents: 'none' }} />
      </AddButton>
      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <h1>Hello, world!</h1>
        </Modal>
      )}
    </>
  );
}
