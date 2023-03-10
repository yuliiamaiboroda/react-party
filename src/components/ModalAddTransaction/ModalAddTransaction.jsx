import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Notify } from 'notiflix';
import 'react-datetime/css/react-datetime.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectTransactionCategories } from 'redux/transactionCategories/transactionCategories-selectors';
import { selectError } from 'redux/transactionsController/transactionController-selectors';
import { selectIsLoadingCategories } from 'redux/transactionCategories/transactionCategories-selectors';
import { createTransaction } from 'redux/transactionsController/transactionController-operations';
import { useCloseModalAddTrans } from 'hooks';
import { formatDate, formatCurrentDate } from 'utils';
import Modal from 'components/Modal';
import Header from 'components/Header';
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
  Input,
  InputContainer,
  DatePicker,
  Error,
  Comment,
  SubmitButton,
  CancelButton,
} from './ModalAddTransaction.styled';

import { TRANSACTION_TYPE } from 'constants';
import ModalSelect from 'components/ModalSelect';
import Loader from 'components/Loader';
import { useTranslation } from 'react-i18next';
import { handlerCategories } from 'helpers/multiLanguage';

export default function ModalAddTransaction() {
  const { t } = useTranslation();
  const transactionCategories = useSelector(selectTransactionCategories);
  const isLoading = useSelector(selectIsLoadingCategories);
  const error = useSelector(selectError);
  const closeModal = useCloseModalAddTrans();
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    isExpense: Yup.bool().required(),
    categoryId: Yup.string().required(t('addTrans.requiredField')),
    amount: Yup.number('The value must be a number')
      .moreThan(0, 'The number must be greater than 0')
      .required(t('addTrans.requiredField')),
    transactionDate: Yup.date('Wrong date standart')
      .max(formatDate(new Date()), 'Please choose a date no later than today')
      .required(t('addTrans.requiredField')),
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

    dispatch(
      createTransaction({
        transactionDate,
        type,
        categoryId,
        comment: comment.trim(),
        amount: isExpense ? -Math.abs(amount) : amount,
      })
    );
  };

  const expenseCategories = transactionCategories.filter(
    element => element.type === TRANSACTION_TYPE.EXPENSE
  );

  const options = expenseCategories.map(({ id, name }) => ({
    value: id,
    label: t(handlerCategories(name)),
  }));

  const incomeCategory = transactionCategories.find(
    element => element.type === TRANSACTION_TYPE.INCOME
  );

  const switchCategoryType = ({ values, setFieldValue }) => {
    if (!values.isExpense && values.categoryId !== incomeCategory.id) {
      setFieldValue('categoryId', incomeCategory.id);
    }

    if (values.isExpense && values.categoryId === incomeCategory.id) {
      setFieldValue('categoryId', '');
    }
  };

  if (error) {
    Notify.failure('Sorry, something went wrong. Please, try again.');
  }

  return (
    <Modal onClose={closeModal}>
      <Box display={['block', 'none']} mb={3} onClick={closeModal}>
        <Header />
      </Box>
      {isLoading ? (
        <Loader />
      ) : (
        <Box
          display="flex"
          flexDirection="column"
          px={[3, 4]}
          width={['100%', 480]}
        >
          <Title>{t('addTrans.add')}</Title>
          <Formik
            initialValues={{
              isExpense: true,
              categoryId: '',
              amount: '',
              transactionDate: formatDate(new Date()),
              comment: '',
            }}
            validationSchema={validationSchema}
            onSubmit={values => {
              handleSubmit(values);
            }}
          >
            {formik => (
              <RecordForm>
                <Toggle>
                  <Income status={formik.values.isExpense}>{t('addTrans.toggInc')}</Income>
                  <Switch>
                    <Checkbox type="checkbox" name="isExpense" />
                    <Slider checked={formik.values.isExpense} />
                  </Switch>
                  <Expense status={formik.values.isExpense}>{t('addTrans.toggExp')}</Expense>
                </Toggle>
                {formik.values.isExpense && (
                  <ModalSelect
                    options={options}
                    onSelect={option =>
                      formik.setFieldValue('categoryId', option.value)
                    }
                  />
                )}
                <ErrorMessage component={Error} name="categoryId" />
                {switchCategoryType(formik)}
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
                      initialValue={formatCurrentDate()}
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
                  placeholder={t('addTrans.placeholderComm')}
                />
                <ErrorMessage component={Error} name="comment" />
                <SubmitButton type="submit">{t('addTrans.addBtn')}</SubmitButton>
              </RecordForm>
            )}
          </Formik>
          <CancelButton type="button" onClick={closeModal}>
          {t('addTrans.cancelBtn')}
          </CancelButton>
        </Box>
      )}
    </Modal>
  );
}
