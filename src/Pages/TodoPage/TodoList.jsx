import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "../../components/Header/Header";
import TodoTask from "../../components/Todo/TodoTask";
import TodoForm from "../../components/Todo/TodoForm";
import styles from "./TodoPage.module.scss";

const TodoList = () => {
  const [todo, setTodo] = useState([
    {
      body: "body first task",
      id: uuidv4(),
      isDone: false,
    },
  ]);

  const addTask = ({ body }) => {
    if (body !== "") {
      setTodo([
        ...todo,
        {
          body: body,
          id: uuidv4(),
          isDone: false,
        },
      ]);
    }
  };

  const handleIsDone = (id) => {
    const updatedTodo = todo.map((task) =>
      task.id === id ? { ...task, isDone: !task.isDone } : task
    );
    setTodo(updatedTodo);
  };

  const deleteTask = (id) => {
    const updatedTodo = todo.filter((task) => task.id !== id);
    setTodo(updatedTodo);
  };

  const onSubmit = (values, formikBag) => {
    addTask(values);
    formikBag.resetForm();
  };

  return (
    <>
      <Header />
      <section className={styles.container}>
        <h2 className={styles.title}>Todo List</h2>
        <TodoTask
          todo={todo}
          handleIsDone={handleIsDone}
          deleteTask={deleteTask}
        />
        <h2 className={styles.title}>Todo form</h2>
        <TodoForm initialValues={todo} onSubmit={onSubmit} />
      </section>
    </>
  );
};

export default TodoList;
