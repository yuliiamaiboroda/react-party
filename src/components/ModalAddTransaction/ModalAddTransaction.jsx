import { Formik, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
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
  Toggle,
  Switch,
  Slider,
  Expense,
  Income,
  Checkbox,
  Selector,
  Input,
  InputContainer,
  DatePicker,
  Error,
  Comment,
  SubmitButton,
  CancelButton,
} from './ModalAddTransaction.styled';

import { TRANSACTION_TYPE } from 'constantes';
import Header from 'components/Header/Header';
import ModalSelect from 'components/ModalSelect';

export default function ModalAddTransaction() {
  const transactionCategories = useSelector(selectTransactionCategories);
  const closeModal = useCloseModalAddTrans();
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    isExpense: Yup.bool().required(),
    categoryId: Yup.string(),
    amount: Yup.number('The value must be a number')
      .moreThan(0, 'The number must be greater than 0')
      .required('Required field'),
    transactionDate: Yup.date('Wrong date standart')
      .max(formatDate(new Date()), 'Please choose a date no later than today')
      .required('Required field'),
    comment: Yup.string().max(
      200,
      'The comment should not exceed 200 characters'
    ),
    test: Yup.string('not a ctring').required('is required'),
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
      <Box display={['block', 'none']} mb={3}>
        <Header />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        px={[3, 4]}
        width={['100%', 480]}
      >
        <Title>Add transaction</Title>
        <Formik
          initialValues={{
            isExpense: true,
            categoryId: '',
            amount: '',
            transactionDate: '',
            comment: '',
            test: '',
          }}
          validationSchema={validationSchema}
          onSubmit={values => {
            console.log('values: ', values);
            handleSubmit(values);
          }}
        >
          {formik => (
            <RecordForm>
              <Toggle>
                <Income status={formik.values.isExpense}>Income</Income>
                <Switch>
                  <Checkbox type="checkbox" name="isExpense" />
                  <Slider checked={formik.values.isExpense} />
                </Switch>
                <Expense status={formik.values.isExpense}>Expense</Expense>
              </Toggle>
              <ModalSelect
                name="test"
                onChange={id => formik.setFieldValue('test', id)}
                options={expenseCategories}
              />
              <ErrorMessage name="test" />
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
              <Box
                display="flex"
                flexWrap="wrap"
                width="100%"
                maxWidth="400px"
                gridGap={4}
              >
                <InputContainer>
                  <Input
                    type="number"
                    name="amount"
                    placeholder="0.00"
                    required
                  />
                  <ErrorMessage component={Error} name="amount" />
                </InputContainer>
                <InputContainer>
                  <DatePicker
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
                      return <Input {...props} placeholder="Choose date" />;
                    }}
                  />
                  <ErrorMessage component={Error} name="transactionDate" />
                </InputContainer>
              </Box>
              <Comment
                onChange={formik.handleChange}
                name="comment"
                as="textarea"
                placeholder="Comment"
              />
              <ErrorMessage component={Error} name="comment" />
              <SubmitButton type="submit">Add</SubmitButton>
            </RecordForm>
          )}
        </Formik>
        <CancelButton type="button" onClick={closeModal}>
          Cancel
        </CancelButton>
      </Box>
    </Modal>
  );
}
