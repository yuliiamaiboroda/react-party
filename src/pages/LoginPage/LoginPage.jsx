import React from 'react';
import LoginForm from 'components/LoginForm/LoginForm';
import css from './LoginPage.module.css';

export default function LoginPage() {
  return (
    <div className={css.page_bg}>
      <div className={css.page_wrapper}>
        <p className={css.page_text}>Finance App</p>
        <LoginForm />
      </div>
    </div>
  );
}
