import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initializeTasks } from "../reducers/reducer";

import Header from "../components/Header";
import Tasks from "../components/Tasks";
import Input from "../components/Input";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeTasks());
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className="max-w-md mx-auto px-2">
        <Input />
        <Tasks />
      </div>
    </>
  );
};

export default App;
