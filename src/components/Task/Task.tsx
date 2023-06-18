import { AiOutlineClose } from "/Users/johnclampet/Documents/Coding/Mosh React/practice/todo1/node_modules/react-icons/ai";
import { AiOutlineCheck } from "/Users/johnclampet/Documents/Coding/Mosh React/practice/todo1/node_modules/react-icons/ai";
import "./Task.css";

interface Props {
  taskItem: string;
  textClassName: string;
  handleClose: () => void;
  handleComplete: () => void;
}

const Task = ({
  taskItem,
  handleClose,
  handleComplete,
  textClassName,
}: Props) => {
  return (
    <div>
      <p className={textClassName}>{taskItem}</p>
      <a href="#" onClick={handleClose}>
        <AiOutlineClose size="28" color="red" />
      </a>
      <a href="#" onClick={handleComplete}>
        <AiOutlineCheck size="28" color="green" />
      </a>
    </div>
  );
};

export default Task;
