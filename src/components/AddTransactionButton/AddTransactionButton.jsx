import { useState } from 'react';
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
        +
      </AddButton>
      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <h1>Hello, world!</h1>
        </Modal>
      )}
    </>
  );
}
