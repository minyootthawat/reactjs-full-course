import React from "react";

const TodoCard = (props) => {
  const { todo, todoId, completeTodo, deleteTodo } = props;

  return (
    <li className="list-row flex justify-between">
      <div className="flex items-center">
        <div>{todo.input}</div>
      </div>
      <div>
        <button
          disabled={todo.completed}
          onClick={() => completeTodo(todoId)}
          className="btn btn-square btn-ghost"
        >
          <i className="fa fa-check" aria-hidden="true"></i>
        </button>
        <button
          onClick={() => deleteTodo(todoId)}
          className="btn btn-square btn-ghost"
        >
          <i className="fas fa-trash-alt    "></i>
        </button>
      </div>
    </li>
  );
};

export default TodoCard;
