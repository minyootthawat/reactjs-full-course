import React from "react";

const Tabs = (props) => {
  const { todos, selectedTab, setSelectedTap } = props;
  const tabs = ["All", "Open", "Completed"];

  return (
    // <nav className="tab-container flex space-x-4 justify-center my-4">
    //   {tabs.map((tab, index) => {
    //     const numOfTasks =
    //       tab === "All"
    //         ? todos.length
    //         : todos.filter((todo) => todo.completed === (tab === "Completed"))
    //             .length;

    //     return (
    //       <button
    //         key={index}
    //         className={
    //           "tab-button px-4 py-2 rounded " +
    //           (selectedTab === tab ? "bg-blue-500 text-white" : "bg-gray-200")
    //         }
    //         onClick={() => setSelectedTap(tab)}
    //       >
    //         <h4 className="font-semibold">
    //           {tab} <span className="text-sm">({numOfTasks})</span>
    //         </h4>
    //       </button>
    //     );
    //   })}
    // </nav>

    <div
      role="tablist"
      className="tabs tabs-box py-4 justify-between flex flex-row flex-nowrap"
    >
      {tabs.map((tab, index) => {
        const numOfTasks =
          tab === "All"
            ? todos.length
            : todos.filter((todo) => todo.completed === (tab === "Completed"))
                .length;

        return (
          <a
            key={index}
            role="tab"
            className={
              "w-full tab " + (selectedTab === tab ? "tab-active" : "")
            }
            onClick={() => setSelectedTap(tab)}
          >
            <h4 className="font-semibold w-max">
              {tab} <span className="text-sm">({numOfTasks})</span>
            </h4>
          </a>
        );
      })}
    </div>
  );
};

export default Tabs;
