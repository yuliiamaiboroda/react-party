import { HiOutlinePlus } from 'react-icons/hi';
import { useSelector } from 'react-redux';
import { useOpenModalAddTrans } from 'hooks';
import { selectIsModalAddTransactionOpen } from 'redux/transactionsController/transactionController-selectors';
import ModalAddTransaction from 'components/ModalAddTransaction';
import { AddButton } from './AddTransactionButton.styled';

export default function AddTransactionButton() {
  const isModalAddTransactionOpen = useSelector(
    selectIsModalAddTransactionOpen
  );
  const openModal = useOpenModalAddTrans();

  return (
    <>
      <AddButton type="button" onClick={openModal}>
        <HiOutlinePlus size="2em" style={{ pointerEvents: 'none' }} />
      </AddButton>
      {isModalAddTransactionOpen && <ModalAddTransaction />}
    </>
  );
}
