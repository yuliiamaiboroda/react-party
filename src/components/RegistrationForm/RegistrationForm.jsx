import { React } from 'react';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { FormTextInput } from 'components/FormTextInput/FormTextInput';
import PasswordStrenght from './PasswordStrength';

import { ReactComponent as EmailIcon } from '../../icons/email.svg';
import { ReactComponent as LockIcon } from '../../icons/lock.svg';
import { ReactComponent as Logo } from '../../icons/wallet.svg';
import { ReactComponent as NameIcon } from '../../icons/name.svg';

import { signUp } from 'redux/authController/authController-operations';
import css from './RegistrationForm.module.css';
import { useTranslation } from 'react-i18next';

function RegistrationForm() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const validationsSchema = Yup.object().shape({
    email: Yup.string('Enter e-mail')
      .email(t('reg.invalidEmail'))
      .required(t('reg.requiredField')),
    password: Yup.string('Enter password')
      .min(6, t('reg.shortPass'))
      .max(14, t('reg.longPass'))
      .required(t('reg.requiredField')),
    confirmPassword: Yup.string('Confirm password')
      .oneOf([Yup.ref('password')], t('reg.motMatchPass'))
      .required(t('reg.requiredField')),
    username: Yup.string()
      .min(2, t('reg.shortName'))
      .max(12, t('reg.longName'))
      .required(t('reg.requiredField')),
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
                placeholder={t('reg.placeholderEmail')}
                className={css.input}
              />

              <FormTextInput
                label={<LockIcon width={16} height={21} />}
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder={t('reg.placeholderPass')}
                className={css.input}
              />

              <PasswordStrenght password={values.password} />

              <FormTextInput
                label={<LockIcon width={16} height={21} />}
                type="password"
                name="confirmPassword"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
                placeholder={t('reg.placeholderConfirm')}
                className={css.input}
              />

              <FormTextInput
                label={<NameIcon width={18} height={18} />}
                type="text"
                name="username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
                placeholder={t('reg.placeholderName')}
                className={css.input}
              />
            </div>

            <div className={css.button_container}>
              <button
                className={css.logo_btn}
                type="submit"
                disabled={!isValid && !dirty}
              >
                {t('reg.registrationBtn')}
              </button>
              <div>
                <Link to="/login" className={css.main_btn}>
                {t('reg.loginBtn')}
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
