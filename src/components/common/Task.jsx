import React, { useState } from "react";
import PropTypes, { bool, string } from "prop-types";
import { useDispatch } from "react-redux";
import { StarOutline } from "iconoir-react";
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

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <input
        type="radio"
        defaultChecked={task.completed}
        onClick={handleCheck}
      />
      <p
        className={task.completed ? "line-through" : "first-letter:first-line:"}
      >
        {task.title}
      </p>
      <div
        onClick={handleStar}
        onKeyDown={handleStar}
        role="button"
        tabIndex={0}
        className={hover ? "" : "invisible"}
      >
        <StarOutline
          fill={task.starred ? "gold" : "none"}
          height={20}
          width={20}
        />
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
