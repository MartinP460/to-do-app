import React from "react";
import PropTypes from "prop-types";

const CompletedTasks = ({ tasks }) => (
  <>
    <h3 className="text-xl font-bold mb-2 mt-8">Completed tasks</h3>
    {tasks.map((task) => (
      <div key={task.id}>
        <input type="radio" />
        <p>{task.title}</p>
      </div>
    ))}
  </>
);

CompletedTasks.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  tasks: PropTypes.array.isRequired,
};

export default CompletedTasks;
