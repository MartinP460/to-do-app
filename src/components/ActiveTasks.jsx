import React from "react";
import PropTypes from "prop-types";

const ActiveTasks = ({ tasks }) => (
  <>
    <h3 className="text-xl font-bold mb-2">Active tasks</h3>
    {tasks.map((task) => (
      <div key={task.id}>
        <input type="radio" />
        <p>{task.title}</p>
      </div>
    ))}
  </>
);

ActiveTasks.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  tasks: PropTypes.array.isRequired,
};

export default ActiveTasks;
