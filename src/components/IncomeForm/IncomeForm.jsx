import { PropTypes } from 'prop-types';

export default function IncomeForm({ onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input type="number" name="sum" />
      <input type="date" name="date" />
      <input type="text" name="comment" />
      <button type="submit">Add</button>
    </form>
  );
}

IncomeForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
