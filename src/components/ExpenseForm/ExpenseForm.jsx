import { PropTypes } from 'prop-types';

export default function ExpenseForm({ onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <select>
        <option value="">--Please choose an option--</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="hamster">Hamster</option>
        <option value="parrot">Parrot</option>
        <option value="spider">Spider</option>
        <option value="goldfish">Goldfish</option>
      </select>
      <input type="number" name="sum" />
      <input type="date" name="date" />
      <input type="text" name="comment" />
      <button type="submit">Add</button>
    </form>
  );
}

ExpenseForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
