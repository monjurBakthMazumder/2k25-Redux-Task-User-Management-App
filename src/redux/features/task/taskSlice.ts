import type { RootState } from "@/redux/store";
import type { ITask } from "@/type";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { deleteUser } from "../user/userSlice";

interface IInitialState {
  tasks: ITask[];
  filter: "all" | "low" | "medium" | "high";
}

const initialState: IInitialState = {
  tasks: [],

  filter: "all", // all, active, completed
};
type TCreateTask = Pick<
  ITask,
  "title" | "description" | "dueDate" | "priority" | "user"
>;

const todoSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TCreateTask>) => {
      const taskData = {
        ...action.payload,
        id: uuidv4(), // ✅ Generate unique ID
        isCompleted: false, // ✅ Ensure default isCompleted is set
      };

      state.tasks.push(taskData);
    },
    toggleTaskCompletion: (state, action: PayloadAction<string>) => {
      state.tasks.forEach((task) => {
        if (task.id === action.payload) {
          task.isCompleted = !task.isCompleted;
        }
      });
    },

    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },

    updateTask: (state, action: PayloadAction<ITask>) => {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
    },

    updateFilter: (
      state,
      action: PayloadAction<"all" | "low" | "medium" | "high">
    ) => {
      state.filter = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(deleteUser, (state, action: PayloadAction<string>) => {
      state.tasks.forEach((task) => {
        if (task.user === action.payload) {
          task.user = null;
        }
      });
    });
  },
});

export const selectTasks = (state: RootState) => {
  const filter = state.todo.filter;
  if (filter === "all") {
    return state.todo.tasks;
  }
  return state.todo.tasks.filter((task) => task.priority === filter);
};
export const selectTaskFilter = (state: RootState) => {
  return state.todo.filter;
};
export const {
  addTask,
  toggleTaskCompletion,
  deleteTask,
  updateTask,
  updateFilter,
} = todoSlice.actions;
export default todoSlice.reducer;
