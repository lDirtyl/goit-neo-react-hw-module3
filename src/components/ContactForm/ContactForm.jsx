import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import css from './ContactForm.module.css';
import Button from '../Button/Button';

const ContactForm = ({ onAdd }) => {
  const nameId = useId();
  const numberId = useId();

  const initialValues = {
    name: '',
    number: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    number: Yup.string()
      .matches(/^[0-9-]+$/, 'Only digits are allowed')
      .min(3, 'Too Short!')
      .max(18, 'Too Long!')
      .required('Required'),
  });

  const handleSubmit = (values, action) => {
    onAdd(values);
    action.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.form}>
        <div className={css.inputWrapper}>
          <label className={css.label} htmlFor={nameId}>
            Name
          </label>
          <br />
          <Field
            className={css.input}
            name="name"
            type="text"
            placeholder="Name"
            id={nameId}
          />
          <ErrorMessage className={css.error} name="name" component="div" />
        </div>
        <div>
          <label htmlFor={numberId}>Number</label>
          <br />
          <Field
            className={css.input}
            name="number"
            type="tel"
            placeholder="Number"
            id={numberId}
          />
          <ErrorMessage className={css.error} name="number" component="div" />
        </div>
        <div className={css.btnWrapper}>
          <Button type='submit' title='Add contact' />
          {/* <button className={css.btn} type="submit">
            Add contact
          </button> */}
        </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;
