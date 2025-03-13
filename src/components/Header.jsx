import React from "react";

const Header = ({ todos }) => {
  const todosLength = todos.length;
  const taskOrTasks = todosLength !== 1 ? "tasks" : "task";

  return (
    <nav className="navbar justify-between md:justify-between pt-4 w-full">
      <div className="flex items-center gap-2 text-2xl">
        <i className="fa-solid fa-list-check"></i>
        <h1 className="hidden md:flex">ToDo App</h1>
      </div>
      <h1 className="text-center text-2xl font-bold">
        You have {todosLength} {taskOrTasks}.
      </h1>
      <div className="flex items-center gap-2">
        <i className="fa-solid fa-user"></i>
        <h1 className="text-xl font-bold hidden md:flex">User</h1>
      </div>
    </nav>
  );
};

export default Header;
