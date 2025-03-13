import React from "react";

const Tabs = (props) => {
  const { todos, selectedTap, setSelectedTap } = props;
  const tabs = ["All", "Open", "Completed"];
  return (
    <nav className="tab-container">
      {tabs.map((tab, index) => {
        const numOfTasks =
          tab === "All"
            ? todos.length
            : todos.filter((todo) => todo.completed === (tab === "Completed"))
                .length;

        return (
          <button
            key={index}
            className={
              "tab-button " + (selectedTap === tab ? "tab-selected" : "")
            }
            onClick={() => setSelectedTap(tab)}
          >
            <h4>
              {tab} <span>({numOfTasks})</span>
            </h4>
          </button>
        );
      })}
    </nav>
  );
};

export default Tabs;
