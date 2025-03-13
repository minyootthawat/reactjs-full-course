import React from "react";
import TodoCard from "./TodoCard";

const ToDoList = (props) => {
  const { todos, selectedTab } = props;
  const tab = selectedTab;
  const filterTodoList =
    tab === "All"
      ? todos
      : todos.filter((todo) => todo.completed === (tab === "Completed"));

  return (
    <>
      <ul className="list bg-base-100 rounded-box shadow-md w-full">
        {filterTodoList.map((todo, index) => {
          return (
            <TodoCard key={index} todoId={todo.id} todo={todo} {...props} />
          );
        })}
      </ul>
    </>
  );
};

export default ToDoList;
