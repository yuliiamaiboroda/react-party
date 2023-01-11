import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTransactionCategories } from 'redux/transactionCategories/transactionCategories-operations';
import {
  selectTransactionCategories,
  selectIsLoadingCategories,
} from 'redux/transactionCategories/transactionCategories-selectors';
import { createTransaction } from 'redux/transactionsController/transactionController-operations';
import { useCloseModalAddTrans } from 'hooks';
import { formatDate } from 'utils';
import Modal from 'components/Modal';
import Box from 'components/Box';
import {
  Title,
  RecordForm,
  Input,
  Toggle,
  Switch,
  Slider,
  Text,
  Checkbox,
  Selector,
  Error,
  SubmitButton,
  CancelButton,
} from './ModalAddTransaction.styled';

const TRANSACTION_TYPE = Object.freeze({
  EXPENSE: 'EXPENSE',
  INCOME: 'INCOME',
});

export default function ModalAddTransaction() {
  const transactionCategories = useSelector(selectTransactionCategories);
  const isLoading = useSelector(selectIsLoadingCategories);
  const closeModal = useCloseModalAddTrans();
  const dispatch = useDispatch();

  const expenseCategories = transactionCategories.filter(
    element => element.type === TRANSACTION_TYPE.EXPENSE
  );

  const incomeCategory = transactionCategories.find(
    element => element.type === TRANSACTION_TYPE.INCOME
  );

  useEffect(() => {
    dispatch(getTransactionCategories());
  }, [dispatch]);

  const validationSchema = Yup.object({
    showSelect: Yup.bool('not a bool').required('Required field'),
    category: Yup.string('string'),
    amount: Yup.number('not a number')
      .moreThan(0, 'less than 0')
      .required('Required field'),
    date: Yup.date('not a date')
      .max(formatDate(), 'it is feature')
      .required('Required field'),
    comment: Yup.string('String'),
  });

  const handleSubmit = ({ date, showSelect, category, comment, amount }) => {
    dispatch(
      createTransaction({
        transactionDate: date,
        type: showSelect ? TRANSACTION_TYPE.EXPENSE : TRANSACTION_TYPE.INCOME,
        categoryId: category || incomeCategory.id,
        comment,
        amount: showSelect ? -Math.abs(amount) : amount,
      })
    );
  };

  return (
    <Modal onClose={closeModal}>
      {!isLoading && (
        <Formik
          initialValues={{
            showSelect: true,
            category: '',
            amount: '',
            date: '',
            comment: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values, action) => {
            console.log('values: ', values);
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
                <Toggle>
                  <Text>Income</Text>
                  <Switch>
                    <Checkbox type="checkbox" name="showSelect" />
                    <Slider checked={formik.values.showSelect} />
                  </Switch>
                  <Text>Expense</Text>
                </Toggle>
                <ErrorMessage component={Error} name="showSelect" />
                {formik.values.showSelect && (
                  <>
                    <Selector
                      name="category"
                      onChange={formik.handleChange}
                      as="select"
                      required
                    >
                      <option value="">Chose category</option>
                      {expenseCategories.map(({ id, name }) => (
                        <option key={id} value={id}>
                          {name}
                        </option>
                      ))}
                    </Selector>
                    <ErrorMessage component={Error} name="category" />
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
      )}
    </Modal>
  );
}
