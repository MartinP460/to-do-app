import { createStore, combineReducers } from "redux";
import taskReducer from "./reducers/taskReducer";
import sortReducer from "./reducers/sortReducer";
import filterReducer from "./reducers/filterReducer";

const reducer = combineReducers({
  tasks: taskReducer,
  sort: sortReducer,
  filter: filterReducer,
});

const store = createStore(reducer);

export default store;
