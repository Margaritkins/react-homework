import React from "react";
import styles from "./Todo.module.scss"

const TodoTask = (props) => {
  const { todo, deleteTask,handleIsDone } = props;
  return (
    <ul className={styles.task}>
      {todo.map((task) => (
        <li className= {styles.taskWrapper} key={task.id}>
          <input type="checkbox" name="body" checked={task.isDone} onChange={()=>handleIsDone(task.id)}/>
          <span
            style={{ textDecoration: task.isDone ? "line-through" : "none" }}
            className={styles.taskBodyWrapper}
          >
            {task.body}
          </span>
          <input 
            type="button"
            value="delete"
            name="task"
            onClick={() => deleteTask(task.id)}
            className={styles.button}
          />
        </li>
      ))}
    </ul>
  );
};

export default TodoTask;
