import { useState } from 'react';
import { HiOutlinePlus } from 'react-icons/hi';
import ModalAddTransaction from 'components/ModalAddTransaction';
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
      {isModalOpen && <ModalAddTransaction onClose={toggleModal} />}
    </>
  );
}
