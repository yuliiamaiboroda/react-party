import React from 'react';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import css from './RegistrationPage.module.css';

export default function LoginPage() {
  return (
    <div>
      <div className={css.page_reg}>
        <p className={css.page_text_reg}>Finance App</p>
        <RegistrationForm />
      </div>
    </div>
  );
}
