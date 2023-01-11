import { React } from 'react';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { FormTextInput } from 'components/FormTextInput/FormTextInput';

import { ReactComponent as EmailIcon } from '../../icons/email.svg';
import { ReactComponent as LockIcon } from '../../icons/lock.svg';
import { ReactComponent as Logo } from '../../icons/wallet.svg';

import { signIn } from 'redux/authController/authController-operations';
import css from './LoginForm.module.css';

function LoginForm() {
  const dispatch = useDispatch();

  const validationsSchema = Yup.object().shape({
    email: Yup.string('Введите e-mail')
      .email('Введите корректный e-mail')
      .required('Обязательное поле для заполнения!'),
    password: Yup.string('Ввведите пароль')
      .min(6, 'Пароль должен состоять минимум из 6 символов')
      .max(14, 'Пароль должен состоять максимум из 14 символов')
      .required('Обязательное поле для заполнения!'),
  });

  const handleLogin = ({ email, password }) => {
    dispatch(signIn({ email, password }));
  };

  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validateOnBlur
        onSubmit={handleLogin}
        validationSchema={validationsSchema}
      >
        {({ handleChange, handleBlur, values, isValid, dirty }) => (
          <Form className={css.form}>
            <div className={css.logo_wrapper}>
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
            </div>

            <div className={css.button_container}>
              <button
                className={css.logo_btn}
                type="submit"
                disabled={!isValid && !dirty}
              >
                LOG IN
              </button>

              <div>
                <Link to="/registration" className={css.main_btn}>
                  REGISTER
                </Link>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default LoginForm;
