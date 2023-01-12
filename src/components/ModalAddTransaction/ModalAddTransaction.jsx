import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectTransactionCategories } from 'redux/transactionCategories/transactionCategories-selectors';
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

import { TRANSACTION_TYPE } from 'constantes';
import Header from 'components/Header/Header';

export default function ModalAddTransaction() {
  const transactionCategories = useSelector(selectTransactionCategories);
  const closeModal = useCloseModalAddTrans();
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    isExpense: Yup.bool().required(),
    categoryId: Yup.string(),
    amount: Yup.number('not a number')
      .moreThan(0, 'The number must be greater than 0')
      .required('Required field'),
    transactionDate: Yup.date('Wrong date standart')
      .max(formatDate(new Date()), 'Please choose a date no later than today')
      .required('Required field'),
    comment: Yup.string().max(
      200,
      'The comment should not exceed 200 characters'
    ),
  });

  const handleSubmit = ({
    transactionDate,
    isExpense,
    categoryId,
    comment,
    amount,
  }) => {
    const type = isExpense ? TRANSACTION_TYPE.EXPENSE : TRANSACTION_TYPE.INCOME;

    const transaction = transactionCategories.find(element =>
      isExpense ? element.id === categoryId : element.type === type
    );

    dispatch(
      createTransaction({
        transactionDate,
        type: transaction.type,
        categoryId: transaction.id,
        comment,
        amount: isExpense ? -Math.abs(amount) : amount,
      })
    );
  };

  const expenseCategories = transactionCategories.filter(
    element => element.type === TRANSACTION_TYPE.EXPENSE
  );

  return (
    <Modal onClose={closeModal}>
      <Box display={['block', 'none']}>
        <Header />
      </Box>
      <Formik
        initialValues={{
          isExpense: true,
          categoryId: '',
          amount: '',
          transactionDate: '',
          comment: '',
        }}
        validationSchema={validationSchema}
        onSubmit={values => {
          handleSubmit(values);
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
                  <Checkbox type="checkbox" name="isExpense" />
                  <Slider checked={formik.values.isExpense} />
                </Switch>
                <Text>Expense</Text>
              </Toggle>
              {formik.values.isExpense && (
                <Selector
                  name="categoryId"
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
              )}
              <Box display="flex" gridGap={4}>
                <Box width="100%">
                  <Input type="number" name="amount" required />
                  <ErrorMessage component={Error} name="amount" />
                </Box>
                <Box width="100%">
                  <Datetime
                    utc={true}
                    timeFormat={false}
                    dateFormat="DD.MM.YYYY"
                    closeOnSelect={true}
                    onChange={date => {
                      formik.setFieldValue(
                        'transactionDate',
                        formatDate(new Date(date._d))
                      );
                    }}
                    inputProps={{
                      required: true,
                      name: 'transactionDate',
                    }}
                    renderInput={props => {
                      return <Input {...props} />;
                    }}
                  />
                  <ErrorMessage component={Error} name="transactionDate" />
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
