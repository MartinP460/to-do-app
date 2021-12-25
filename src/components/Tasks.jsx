import React from "react";
import { useSelector } from "react-redux";

import ActiveTasks from "./ActiveTasks";
import CompletedTasks from "./CompletedTasks";

const Tasks = () => {
  // eslint-disable-next-line no-shadow
  const tasks = useSelector((tasks) => tasks);

  console.log(tasks);

  return (
    <>
      <ActiveTasks tasks={tasks.filter((t) => !t.completed)} />
      <CompletedTasks tasks={tasks.filter((t) => t.completed)} />
    </>
  );
};

export default Tasks;
