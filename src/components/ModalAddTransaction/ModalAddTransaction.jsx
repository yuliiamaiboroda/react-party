import { PropTypes } from 'prop-types';
import { useState } from 'react';
import Modal from 'components/Modal';
import ExpenseForm from 'components/ExpenseForm';
import IncomeForm from 'components/IncomeForm';

export default function ModalAddTransaction({ onClose }) {
  const [isExpense, setIsExpense] = useState(true);

  const handleSubmit = event => {
    event.preventDefault();
    console.log(event.target.elements);
    onClose();
  };
  return (
    <Modal onClose={onClose}>
      <label>
        Income
        <input
          type="checkbox"
          checked={isExpense}
          onChange={() => {
            setIsExpense(!isExpense);
          }}
        />
        Expense
      </label>
      {isExpense ? (
        <ExpenseForm onSubmit={handleSubmit} />
      ) : (
        <IncomeForm onSubmit={handleSubmit} />
      )}
    </Modal>
  );
}

ModalAddTransaction.propTypes = {
  onClose: PropTypes.func.isRequired,
};
