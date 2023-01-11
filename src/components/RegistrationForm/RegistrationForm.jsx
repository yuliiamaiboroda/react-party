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

  const validationsSchema = Yup.object({
    email: Yup.string()
      .email('Введите корректный e-mail')
      .required('Обязательное поле для заполнения!'),
    password: Yup.string()
      .min(6, 'Пароль должен состоять минимум из 6 символов')
      .max(14, 'Пароль должен состоять максимум из 14 символов')
      .required('Обязательное поле для заполнения!'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Пароли не совпадают')
      .required('Требуется подтверждение пароля!'),
    username: Yup.string()
      .typeError()
      .min(1, 'Имя должно состоять минимум из 1 символа')
      .max(12, 'Имя должно состоять максимум из 12 символов')
      .required('Обязательное поле для заполнения!'),
  });

  const handleRegister = ({ username, email, password }) => {
    dispatch(signUp({ username, email, password }));
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
