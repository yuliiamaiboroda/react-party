import { PropTypes } from 'prop-types';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Modal from 'components/Modal';
import { useCloseModalAddTrans } from 'hooks';

export default function ModalAddTransaction({ onClose }) {
  const closeModal = useCloseModalAddTrans();

  const validationSchema = Yup.object().shape({
    sum: Yup.number().required(),
    date: Yup.string().required(),
    comment: Yup.string(),
    type: Yup.bool(),
    colors: Yup.string(),
  });

  return (
    <Modal onClose={closeModal}>
      <Formik
        initialValues={{
          sum: '',
          date: '',
          comment: '',
          type: true,
          colors: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, action) => {
          console.log('values: ', values);
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
            <Field type="number" name="sum" />
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
