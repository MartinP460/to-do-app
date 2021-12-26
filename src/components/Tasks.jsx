import React from "react";
import { useSelector } from "react-redux";

import Task from "./common/Task";

const Tasks = () => {
  const [active, completed] = useSelector((tasks) => [
    tasks.filter((t) => !t.completed),
    tasks.filter((t) => t.completed),
  ]);

  console.log(active);
  console.log(completed);

  return (
    <>
      <h3 className="text-xl font-bold mb-2">Active tasks</h3>
      {active.length === 0 ? (
        <p>No active tasks.</p>
      ) : (
        active.map((task) => <Task task={task} key={task.id} />)
      )}
      <h3 className="text-xl font-bold mb-2 mt-8">Completed tasks</h3>
      {completed.length === 0 ? (
        <p>No completed tasks.</p>
      ) : (
        completed.map((task) => <Task task={task} key={task.id} />)
      )}
    </>
  );
};

export default Tasks;
