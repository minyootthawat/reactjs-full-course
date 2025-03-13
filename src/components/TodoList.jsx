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
      {filterTodoList.map((todo, index) => {
        return <TodoCard key={index} todoId={todo.id} todo={todo} {...props} />;
      })}
    </>
  );
};

export default ToDoList;
