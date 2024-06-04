import React from "react";
import { Field, Form, Formik } from "formik";
import styles from "./TodoForm.module.scss"

const TodoForm = (props) => {
  const { todo, onSubmit } = props;
  return (
    <Formik initialValues={{ body: "" }} onSubmit={onSubmit}>
      <Form className={styles.form}>
        <Field className={styles.field} name="body" />
        <button className={styles.button} type="submit">Add to list</button>
      </Form>
    </Formik>
  );
};

export default TodoForm;
