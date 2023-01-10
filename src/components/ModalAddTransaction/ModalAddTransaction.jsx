import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { useSelector, useDispatch } from 'react-redux';
// import { getTransactionCategories } from 'redux/transactionCategories/transactionCategories-operations';
// import { selectTransactionCategories } from 'redux/transactionCategories/transactionCategories-selectors';
import { createTransaction } from 'redux/transactionsController/transactionController-operations';
import { useCloseModalAddTrans } from 'hooks';
import { formatDate } from 'utils';
import Modal from 'components/Modal';
import Box from 'components/Box';
import {
  Title,
  RecordForm,
  Input,
  Switch,
  Text,
  Checkbox,
  Selector,
  Error,
  SubmitButton,
  CancelButton,
} from './ModalAddTransaction.styled';

export default function ModalAddTransaction() {
  // const transactionCategories = useSelector(selectTransactionCategories);
  const closeModal = useCloseModalAddTrans();
  const dispatch = useDispatch();

  const handleSubmit = values => {
    dispatch(
      createTransaction({
        type: 'INCOME',
        categoryId: '063f1132-ba5d-42b4-951d-44011ca46262',
        amount: values.amount,
        transactionDate: values.date,
        comment: values.comment,
      })
    );
  };

  // useEffect(() => {
  //   dispatch(getTransactionCategories());
  // }, []);

  const validationSchema = Yup.object({
    type: Yup.bool('not a bool').required('Required field'),
    colors: Yup.string('String'),
    amount: Yup.number('not a number')
      .moreThan(0, 'less than 0')
      .required('Required field'),
    date: Yup.date('not a date')
      .max(formatDate(), 'it is feature')
      .required('Required field'),
    comment: Yup.string('String'),
  });

  return (
    <Modal onClose={closeModal}>
      <Formik
        initialValues={{
          type: true,
          colors: '',
          amount: '',
          date: '',
          comment: '',
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
          <Box
            display="flex"
            flexDirection="column"
            flexBasis="100%"
            px={[3, 4]}
            width={[380, 480]}
          >
            <Title>Add transaction</Title>
            <RecordForm>
              <Switch>
                <Text>Income</Text>
                <Checkbox type="checkbox" name="type" />
                <Text>Expense</Text>
              </Switch>
              <ErrorMessage component={Error} name="type" />
              {formik.values.type && (
                <>
                  <Selector name="colors" as="select">
                    <option value="">Chose color</option>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                  </Selector>
                  <ErrorMessage component={Error} name="colors" />
                </>
              )}
              <Box display="flex" gridGap={4}>
                <Box width="100%">
                  <Input type="number" name="amount" />
                  <ErrorMessage component={Error} name="amount" />
                </Box>
                <Box width="100%">
                  <Input type="date" name="date" />
                  <ErrorMessage component={Error} name="date" />
                </Box>
              </Box>
              <Input type="text" name="comment" />
              <ErrorMessage component={Error} name="comment" />
              <SubmitButton type="submit">Add</SubmitButton>
            </RecordForm>
            <CancelButton type="button" onClick={closeModal}>
              Cancel
            </CancelButton>
          </Box>
        )}
      </Formik>
    </Modal>
  );
}
