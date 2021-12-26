import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ArrowRight } from "iconoir-react";
import { createTask } from "../reducers/reducer";

const Input = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    dispatch(
      createTask({
        title: input,
        completed: false,
        starred: false,
      })
    );
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task">
        Create a new task
        <input
          type="text"
          id="task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </label>
      <ArrowRight
        height={24}
        width={24}
        onClick={handleSubmit}
        onKeyDown={handleSubmit}
        role="button"
        tabIndex={0}
      />
    </form>
  );
};

export default Input;
