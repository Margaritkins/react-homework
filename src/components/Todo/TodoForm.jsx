import React from "react";
import { Field, Form, Formik } from "formik";

const TodoForm = (props) => {
  const { todo, onSubmit } = props;
  return (
    <Formik initialValues={{ body: "" }} onSubmit={onSubmit}>
      <Form>
        <Field name="body" />
        <button type="submit">Add task</button>
      </Form>
    </Formik>
  );
};

export default TodoForm;
