import { ReactNode } from "react";
import { useState } from "react";
import Task from "./components/Task";
import { BiMessageSquareAdd } from "/Users/johnclampet/Documents/Coding/Mosh React/practice/todo1/node_modules/react-icons/bi";

const App = () => {
  const [taskArr, setTaskArr] = useState([
    "go to sleep",
    "go for a run",
    "cook food",
  ]);

  const removeTask = (taskIndex: number): void => {
    const filteredTaskArr = taskArr.filter(
      (item: string, index: number) => index != taskIndex
    );
    setTaskArr(filteredTaskArr);
  };

  return (
    <div>
      <input type="text" />
      <a href="#">
        <BiMessageSquareAdd color="red" size="40" />
      </a>
      {taskArr.map((task: string, index: number): ReactNode => {
        return (
          <Task
            key={index}
            taskItem={task}
            handleClose={() => {
              removeTask(index);
            }}
            handleComplete={() => {
              console.log("COMPLETE CLICKED");
            }}
          />
        );
      })}
    </div>
  );
};

export default App;
