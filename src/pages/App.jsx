import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initializeTasks } from "../reducers/reducer";

import Tasks from "../components/Tasks";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeTasks());
  }, [dispatch]);

  return <Tasks />;
};

export default App;
