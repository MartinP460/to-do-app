import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initializeTasks } from "../reducers/reducer";

import Tasks from "../components/Tasks";
import Input from "../components/Input";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeTasks());
  }, [dispatch]);

  return (
    <>
      <Input />
      <Tasks />
    </>
  );
};

export default App;
