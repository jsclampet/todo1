import { ChangeEvent, ReactNode } from "react";
import { useState } from "react";
import Task from "./components/Task";
import { BiMessageSquareAdd } from "/Users/johnclampet/Documents/Coding/Mosh React/practice/todo1/node_modules/react-icons/bi";

const App = () => {
  const [taskArr, setTaskArr] = useState([
    "go to sleep",
    "go for a run",
    "cook food",
  ]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [userInput, setUserInput] = useState("");

  const addTask = (newTask: string) => {
    setTaskArr([...taskArr, newTask]);
  };
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
            textClassName={index === selectedIndex ? "completed" : ""}
            taskItem={task}
            handleClose={() => {
              removeTask(index);
            }}
            handleComplete={() => {
              setSelectedIndex(index);
            }}
          />
        );
      })}
    </div>
  );
};

export default App;
