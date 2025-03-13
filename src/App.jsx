import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";

function App() {
  const [todos, setTodos] = useState([]);

  const [selectedTab, setSelectedTab] = useState("Open");

  function addTodo(newTodo) {
    const newTodoList = [
      ...todos,
      {
        id: todos.length,
        input: newTodo,
        completed: false,
      },
    ];
    setTodos(newTodoList);
    saveTodosToLocalStorage(newTodoList);
  }

  function completeTodo(id) {
    let newTodoList = [...todos];

    let completedTodo = newTodoList[id];
    completedTodo.completed = true;
    newTodoList[id] = completedTodo;
    setTodos(newTodoList);
    saveTodosToLocalStorage(newTodoList);
  }

  function deleteTodo(id) {
    const newTodoList = todos.filter((todo, index) => index !== id);
    console.log(newTodoList);

    setTodos(newTodoList);
    saveTodosToLocalStorage(newTodoList);
  }

  function saveTodosToLocalStorage(currentTodos) {
    localStorage.setItem("todos-app", JSON.stringify({ todos: currentTodos }));
  }

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos-app");
    if (!storedTodos || storedTodos === "undefined") {
      setTodos([]);
      return;
    }

    const db = JSON.parse(storedTodos);
    if (db.todos) {
      setTodos(db.todos);
    }
  }, []);

  return (
    <div className="w-full min-h-screen bg-base-200 flex flex-col items-center max-w-[500px] mx-auto px-4">
      <div className="flex flex-col w-full max-w-lg">
        <div className="col">
          <Header todos={todos} />
        </div>
        <div className="col">
          <Tabs
            todos={todos}
            selectedTab={selectedTab}
            setSelectedTap={setSelectedTab}
          />
        </div>
      </div>

      <ToDoList
        todos={todos}
        selectedTab={selectedTab}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />
      <ToDoInput addTodo={addTodo} />
    </div>
  );
}

export default App;
