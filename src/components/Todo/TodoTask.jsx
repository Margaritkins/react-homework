import React from "react";

const TodoTask = (props) => {
  const { todo, deleteTask,handleIsDone } = props;
  return (
    <ul>
      {todo.map((task) => (
        <li key={task.id}>
          <input type="checkbox" name="body" checked={task.isDone} onChange={()=>handleIsDone(task.id)}/>
          <span
            style={{ textDecoration: task.isDone ? "line-through" : "none" }}
          >
            {task.body}
          </span>
          <input
            type="button"
            value="delete"
            name="task"
            onClick={() => deleteTask(task.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default TodoTask;
