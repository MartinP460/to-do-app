import React, { useState } from "react";
import PropTypes, { bool, string } from "prop-types";
import { useDispatch } from "react-redux";
import { StarOutline, Trash } from "iconoir-react";
import { updateTask } from "../../reducers/reducer";

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

  const handleDelete = () => "deleted!";

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="flex leading-tight h-10"
    >
      <input
        type="checkbox"
        defaultChecked={task.completed}
        onClick={handleCheck}
        className={`self-center mr-2 w-4 h-4 ${
          task.completed ? "accent-gray-500" : "accent-green-600"
        }`}
      />
      <p
        className={`flex-auto self-center ${
          task.completed ? "line-through" : ""
        }`}
      >
        {task.title}
      </p>
      <div className="flex gap-1 ml-3">
        <div
          onClick={handleDelete}
          onKeyDown={handleDelete}
          role="button"
          tabIndex={0}
          className={`flex ${hover ? "" : "invisible"}`}
        >
          <Trash
            color="firebrick"
            height={20}
            width={20}
            className="self-center"
          />
        </div>
        <div
          onClick={handleStar}
          onKeyDown={handleStar}
          role="button"
          tabIndex={0}
          className={`flex ${hover ? "" : "invisible"}`}
        >
          <StarOutline
            fill={task.starred ? "gold" : "none"}
            height={20}
            width={20}
            className="self-center"
          />
        </div>
      </div>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.shape({
    title: string.isRequired,
    completed: bool.isRequired,
    starred: bool.isRequired,
  }).isRequired,
};

export default Task;
