import React from "react";
import { useSelector } from "react-redux";
import { Trophy, Gym, ArrowUpCircled } from "iconoir-react";

import Task from "./common/Task";

const Tasks = () => {
  const [active, completed] = useSelector((tasks) => [
    tasks.filter((t) => !t.completed),
    tasks.filter((t) => t.completed),
  ]);

  if (active.length === 0 && completed.length === 0) {
    return (
      <div className="flex flex-col items-center mt-8">
        <ArrowUpCircled width={40} height={40} color="#BEBEBE" />
        <p className="text-gray-400 mt-4">
          Add tasks in the input field above.
        </p>
      </div>
    );
  }

  return (
    <>
      <h3 className="font-bold tracking-tight mt-8">Active tasks</h3>
      <div className="mt-2">
        {active.length === 0 ? (
          <div className="flex flex-col items-center">
            <Trophy width={40} height={40} color="#BEBEBE" />
            <p className="text-gray-400">
              You&apos;ve completed all your tasks. Great job!
            </p>
          </div>
        ) : (
          active.map((task) => <Task task={task} key={task.id} />)
        )}
      </div>
      <h3 className="font-bold tracking-tight mt-12">Completed tasks</h3>
      <div className="mt-2">
        {completed.length === 0 ? (
          <div className="flex flex-col items-center">
            <Gym width={40} height={40} color="#BEBEBE" />
            <p className="text-gray-400">No completed tasks. Get going!</p>
          </div>
        ) : (
          completed.map((task) => <Task task={task} key={task.id} />)
        )}
      </div>
    </>
  );
};

export default Tasks;
