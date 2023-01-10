import { PropTypes } from 'prop-types';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
// import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { getTransactionCategories } from 'redux/transactionCategories/transactionCategories-operations';
// import { selectTransactionCategories } from 'redux/transactionCategories/transactionCategories-selectors';
import { createTransaction } from 'redux/transactionsController/transactionController-operations';
import { useCloseModalAddTrans } from 'hooks';
import Modal from 'components/Modal';

export default function ModalAddTransaction({ onClose }) {
  // const transactionCategories = useSelector(selectTransactionCategories);
  const closeModal = useCloseModalAddTrans();
  const dispatch = useDispatch();

  const handleSubmit = values => {
    dispatch(
      createTransaction({
        transactionDate: values.date,
        type: 'INCOME',
        categoryId: '063f1132-ba5d-42b4-951d-44011ca46262',
        comment: values.comment,
        amount: values.amount,
      })
    );
  };

  // useEffect(() => {
  //   dispatch(getTransactionCategories());
  // }, []);

  const validationSchema = Yup.object({
    sum: Yup.number().moreThan(0).required(),
    date: Yup.string().required(),
    comment: Yup.string(),
    type: Yup.bool().required(),
    colors: Yup.string(),
  });

  return (
    <Modal onClose={closeModal}>
      <Formik
        initialValues={{
          amount: '',
          date: '',
          comment: '',
          type: true,
          colors: '',
        }}
        // validationSchema={validationSchema}
        onSubmit={(values, action) => {
          console.log('values: ', values);
          console.log('this is submit');
          handleSubmit(values);
          action.resetForm();
        }}
      >
        {formik => (
          <Form>
            <label>
              Income
              <Field type="checkbox" name="type" />
              Expense
            </label>
            {formik.values.type && (
              <Field name="colors" as="select">
                <option value="">Chose color</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
              </Field>
            )}
            <Field type="number" name="amount" />
            <Field type="date" name="date" />
            <Field type="text" name="comment" />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </Modal>
  );
}

ModalAddTransaction.propTypes = {
  onClose: PropTypes.func,
};
