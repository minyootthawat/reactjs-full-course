import React from "react";

const TodoCard = (props) => {
  const { todo, todoId, completeTodo, deleteTodo } = props;

  return (
    <div className="card todo-item">
      <p>{todo.input}</p>
      <div className="todo-buttons">
        <button disabled={todo.completed} onClick={() => completeTodo(todoId)}>
          <h6>Done</h6>
        </button>
        <button onClick={() => deleteTodo(todoId)}>
          <h6>Delete</h6>
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
