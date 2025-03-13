import { useState } from "react";

const ToDoInput = (props) => {
  const { addTodo } = props;

  const [newTodo, setNewTodo] = useState("");

  return (
    <div className="input-container">
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        type="text"
        className="input-field"
        placeholder="Add a new task..."
      />
      <button
        onClick={() => {
          if (newTodo.trim() !== "") {
            addTodo(newTodo);
            setNewTodo("");
          }
        }}
        className="add-button"
      >
        <h6>
          <i className="fa-solid fa-plus"></i>
        </h6>
      </button>
    </div>
  );
};

export default ToDoInput;
