import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "../../components/Header/Header";
import { Field, Form, Formik } from "formik";

const Todo = () => {
  const [todo, setTodo] = useState([
    {
      body: "body first task",
      id: uuidv4(),
      isDone: false,
    },
  ]);

  const addTask = ([{ body }]) => {
    setTodo([
      ...todo,
      {
        body: body,
        id: uuidv4(),
      },
    ]);
  };

  const onSubmit = (values, formikBag) => {
    addTask([values]);
    formikBag.resetForm();
  };

  return (
    <div>
      <Header />
      <p>Todo List</p>
      <ul>
        {todo.map((task) => (
          <li key={task.id}>{task.body}</li>
        ))}
      </ul>
      <p>Todo form</p>
      <Formik initialValues={todo} onSubmit={onSubmit}>
        <Form>
          <Field name="body" />
          <input type="submit" onChange={addTask}  />
        </Form>
      </Formik>
    </div>
  );
};

export default Todo;
