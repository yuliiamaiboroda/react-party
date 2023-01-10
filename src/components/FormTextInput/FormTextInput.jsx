import { React } from 'react';
import { ErrorMessage, useField } from 'formik';
import css from './FormTextInput.module.css';

export const FormTextInput = ({ label, ...props }) => {
  const [field] = useField(props);
  return (
    <>
      <ErrorMessage
        component="div"
        name={field.name}
        style={{ color: '#FF6596' }}
      />
      <label htmlFor={field.name} className={css.label}>
        {label}
        <input {...field} {...props} autoComplete="off" />
      </label>
    </>
  );
};
