import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage
import taskReducer from "./features/task/taskSlice";
import userReducer from "./features/user/userSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedTaskReducer = persistReducer(persistConfig, taskReducer);
const persistedUserReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    todo: persistedTaskReducer,
    user: persistedUserReducer,
  },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
