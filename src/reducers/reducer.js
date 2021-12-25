const tasks = [
  {
    title: "Do the laundry",
    completed: false,
    starred: false,
    id: 0,
  },
  {
    title: "Clean your room and eat some donuts",
    completed: false,
    starred: true,
    id: 1,
  },
  {
    title: "Do the dishes",
    completed: true,
    starred: true,
    id: 2,
  },
];

export const initializeTasks = () => (dispatch) => {
  dispatch({
    type: "INIT_TASKS",
    data: tasks,
  });
};

export const createTask = (content) => (dispatch) => {
  dispatch({
    type: "NEW_TASK",
    data: content,
  });
};

export const updateTask = (content) => (dispatch) => {
  dispatch({
    type: "UPDATE_TASK",
    data: content,
  });
};

const reducer = (action, state = []) => {
  switch (action.type) {
    case "INIT_TASKS": {
      return action.data;
    }
    case "NEW_TASK": {
      return state.concat(action.data);
    }
    case "UPDATE_TASK": {
      const updatedTaskIndex = state.findIndex((t) => t.id === action.data.id);
      const updatedTasks = [...state];
      updatedTasks[updatedTaskIndex] = action.data;
      return updatedTasks;
    }
    default:
      return state;
  }
};

export default reducer;
