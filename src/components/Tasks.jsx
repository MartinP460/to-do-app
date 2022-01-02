import React from "react";
import { useSelector } from "react-redux";
import { Trophy, Gym, ArrowUpCircled } from "iconoir-react";

import Task from "./common/Task";
import Dropdown from "./Dropdown";

const Tasks = () => {
  const [active, completed] = useSelector((state) => {
    let tasks = state.tasks.filter((t) => !t.completed);

    if (state.filter === "STARRED") {
      tasks = tasks.filter((t) => t.starred);
    }
    if (state.sort === "ALPHABETICALLY") {
      tasks = tasks.sort((a, b) => a.title.localeCompare(b.title));
    }
    if (state.sort === "TIME") {
      tasks = tasks.sort((a, b) => a.created - b.created);
    }
    return [
      tasks.filter((t) => !t.completed),
      state.tasks.filter((t) => t.completed),
    ];
  });

  if (active.length === 0 && completed.length === 0) {
    return (
      <div className="flex flex-col items-center mt-8">
        <ArrowUpCircled width={40} height={40} className="text-gray-300" />
        <p className="text-gray-400 mt-4">
          Add tasks in the input field above.
        </p>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="flex justify-between mt-8">
        <h3 className="font-bold tracking-tight">Active tasks</h3>
        <Dropdown />
      </div>
      <div className="mt-2">
        {active.length === 0 ? (
          <div className="flex flex-col items-center">
            <Trophy width={40} height={40} className="text-gray-300" />
            <p className="text-gray-400">
              No tasks here. Maybe you&apos;ve completed them all.
            </p>
          </div>
        ) : (
          <ul id="active-tasks">
            {active.map((task) => (
              <Task task={task} key={task.id} />
            ))}
          </ul>
        )}
      </div>
      <h3 className="font-bold tracking-tight mt-12">Completed tasks</h3>
      <div className="mt-2">
        {completed.length === 0 ? (
          <div className="flex flex-col items-center">
            <Gym width={40} height={40} className="text-gray-300" />
            <p className="text-gray-400">No completed tasks. Get going!</p>
          </div>
        ) : (
          <ul id="completed-tasks">
            {completed.map((task) => (
              <Task task={task} key={task.id} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Tasks;
