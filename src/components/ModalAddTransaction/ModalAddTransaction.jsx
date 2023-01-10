import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { useSelector, useDispatch } from 'react-redux';
// import { getTransactionCategories } from 'redux/transactionCategories/transactionCategories-operations';
// import { selectTransactionCategories } from 'redux/transactionCategories/transactionCategories-selectors';
import { createTransaction } from 'redux/transactionsController/transactionController-operations';
import { useCloseModalAddTrans } from 'hooks';
import Modal from 'components/Modal';

export default function ModalAddTransaction() {
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
    amount: Yup.number('not a number')
      .moreThan(0, 'less than 0')
      .required('Required field'),
    date: Yup.string('not a string').required('Required field'),
    comment: Yup.string('String'),
    type: Yup.bool('not a bool').required('Required field'),
    colors: Yup.string('String'),
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
        validationSchema={validationSchema}
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
            <ErrorMessage name="type" />
            {formik.values.type && (
              <>
                <Field name="colors" as="select">
                  <option value="">Chose color</option>
                  <option value="red">Red</option>
                  <option value="green">Green</option>
                  <option value="blue">Blue</option>
                </Field>
                <ErrorMessage name="type" />
              </>
            )}
            <Field type="number" name="amount" />
            <ErrorMessage name="amount" />
            <Field type="date" name="date" />
            <ErrorMessage name="date" />
            <Field type="text" name="comment" />
            <ErrorMessage name="comment" />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </Modal>
  );
}
