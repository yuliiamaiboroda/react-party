import { React } from 'react';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { FormTextInput } from 'components/FormTextInput/FormTextInput';

import { ReactComponent as EmailIcon } from '../../icons/email.svg';
import { ReactComponent as LockIcon } from '../../icons/lock.svg';
import { ReactComponent as Logo } from '../../icons/wallet.svg';
import { ReactComponent as NameIcon } from '../../icons/name.svg';

import { signUp } from 'redux/authController/authController-operations';
import css from './RegistrationForm.module.css';

function RegistrationForm() {
  const dispatch = useDispatch();

  const validationsSchema = Yup.object().shape({
    email: Yup.string('Enter e-mail')
      .email('Invalid email')
      .required('Required'),
    password: Yup.string('Enter password')
      .min(6, 'Too Short!')
      .max(14, 'Too Long!')
      .required('Required'),
    confirmPassword: Yup.string('Confirm password')
      .oneOf([Yup.ref('password')], 'Passwords do not match')
      .required('Required'),
    username: Yup.string()
      .min(2, 'Please enter a name more than 1 character')
      .max(12, 'Please enter a name less than 12 character')
      .required('Required'),
  });

  const handleRegister = ({ username, email, password }, { resetForm }) => {
    dispatch(signUp({ username, email, password, resetForm }));
  };

  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
          username: '',
        }}
        validateOnBlur
        onSubmit={handleRegister}
        validationSchema={validationsSchema}
      >
        {({ handleChange, handleBlur, values, isValid, dirty }) => (
          <Form className={css.form_reg}>
            <div className={css.logo_wrapper_reg}>
              <Logo width={30} height={30} className={css.logo} />
              <h1 className={css.logo_text}>Wallet</h1>
            </div>

            <div className={css.container_input}>
              <FormTextInput
                label={<EmailIcon width={20} height={16} />}
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="E-mail"
                className={css.input}
              />

              <FormTextInput
                label={<LockIcon width={16} height={21} />}
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="Password"
                className={css.input}
              />

              <FormTextInput
                label={<LockIcon width={16} height={21} />}
                type="password"
                name="confirmPassword"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
                placeholder="Confirm password"
                className={css.input}
              />

              <FormTextInput
                label={<NameIcon width={18} height={18} />}
                type="text"
                name="username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
                placeholder="Your name"
                className={css.input}
              />
            </div>

            <div className={css.button_container}>
              <button
                className={css.logo_btn}
                type="submit"
                disabled={!isValid && !dirty}
              >
                REGISTER
              </button>
              <div>
                <Link to="/login" className={css.main_btn}>
                  LOG IN
                </Link>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default RegistrationForm;
