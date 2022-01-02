import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ArrowRight } from "iconoir-react";
import { createTask } from "../reducers/taskReducer";

const Input = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createTask({
        title: input,
        completed: false,
        starred: false,
        created: Date.now(),
      })
    );
    setInput("");
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="w-5/6 mx-auto mt-16 relative"
    >
      <div className="flex flex-col border-b-2">
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label
          htmlFor="task"
          className="uppercase text-gray-400 text-sm tracking-wide font-medium"
        >
          Create a new task
        </label>
        <input
          type="text"
          id="task"
          data-test="new-task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="py-3 text-lg outline-0 w-4/5"
          placeholder="A new task..."
        />
      </div>
      <button
        type="submit"
        data-test="submit-task"
        className="absolute top-8 right-0"
      >
        <ArrowRight
          height={32}
          width={32}
          className="text-gray-500 hover:text-gray-700 transition-all ease-in"
        />
      </button>
    </form>
  );
};

export default Input;
