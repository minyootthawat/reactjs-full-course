import { useState } from "react";

const ToDoInput = (props) => {
  const { addTodo } = props;

  const [newTodo, setNewTodo] = useState("");

  return (
    <fieldset className="fieldset my-4 w-full">
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        type="text"
        className="input w-full"
        placeholder="Add a new task..."
      />
      <button
        onClick={() => {
          if (newTodo.trim() !== "") {
            addTodo(newTodo);
            setNewTodo("");
          }
        }}
        type="button"
        className="btn btn-primary"
      >
        <i className="fa fa-plus" aria-hidden="true"></i> Add
      </button>
    </fieldset>
  );
};

export default ToDoInput;
