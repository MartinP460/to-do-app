const tasks = [
  {
    title: "Do the laundry",
    completed: false,
    starred: false,
    created: Date.now(),
    id: 0,
  },
  {
    title: "Clean your room and eat some donuts",
    completed: false,
    starred: true,
    created: Date.now() - 1000,
    id: 1,
  },
  {
    title: "Do the dishes",
    completed: true,
    starred: false,
    created: Date.now() + 1000,
    id: 2,
  },
];

export const initializeTasks = () => ({
  type: "INIT_TASKS",
  data: tasks,
});

export const createTask = (content) => ({
  type: "NEW_TASK",
  data: content,
});

export const updateTask = (content) => ({
  type: "UPDATE_TASK",
  data: content,
});

export const deleteTask = (id) => ({
  type: "DELETE_TASK",
  data: { id },
});

// eslint-disable-next-line default-param-last
const taskReducer = (state = [], action) => {
  switch (action.type) {
    case "INIT_TASKS": {
      return action.data;
    }
    case "NEW_TASK": {
      const newTask = { ...action.data, id: state.length };
      return state.concat(newTask);
    }
    case "UPDATE_TASK": {
      const updatedTaskIndex = state.findIndex((t) => t.id === action.data.id);
      const updatedTasks = [...state];
      updatedTasks[updatedTaskIndex] = action.data;
      return updatedTasks;
    }
    case "DELETE_TASK": {
      return state.filter((t) => t.id !== action.data.id);
    }
    default:
      return state;
  }
};

export default taskReducer;
