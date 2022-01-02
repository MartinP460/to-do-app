import React, { useState } from "react";
import PropTypes, { bool, string, number } from "prop-types";
import { useDispatch } from "react-redux";
import { StarOutline, Trash } from "iconoir-react";
import { updateTask, deleteTask } from "../../reducers/taskReducer";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [hover, setHover] = useState(false);

  const handleCheck = () => {
    dispatch(
      updateTask({
        ...task,
        completed: !task.completed,
      })
    );
  };

  const handleStar = () => {
    dispatch(
      updateTask({
        ...task,
        starred: !task.starred,
      })
    );
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <li
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="flex items-center leading-tight mt-3 task"
    >
      <input
        type="checkbox"
        defaultChecked={task.completed}
        onClick={handleCheck}
        data-test="complete-task"
        className="shrink-0 mr-2 w-4 h-4 accent-green-600 checked:accent-gray-500"
      />
      <p className={`flex-auto${task.completed ? " line-through" : ""}`}>
        {task.title}
      </p>
      <div
        className={`flex items-center gap-1 ml-3${hover ? "" : " invisible"}`}
      >
        <button type="button" onClick={handleDelete} className="delete-task">
          <Trash
            height={20}
            width={20}
            className="text-red-700 hover:text-red-800"
          />
        </button>
        <button type="button" onClick={handleStar} className="star-task">
          <StarOutline
            height={20}
            width={20}
            className={`transition-colors ease-in-out duration-75${
              task.starred
                ? " visible fill-amber-400 text-amber-400 hover:fill-amber-500 hover:text-amber-500"
                : " fill-gray-300 text-gray-300 hover:fill-gray-400 hover:text-gray-400"
            }`}
          />
        </button>
      </div>
    </li>
  );
};

Task.propTypes = {
  task: PropTypes.shape({
    title: string.isRequired,
    completed: bool.isRequired,
    starred: bool.isRequired,
    id: number.isRequired,
  }).isRequired,
};

export default Task;
