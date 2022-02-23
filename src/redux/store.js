import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authSlice";
import counterReducer from "./reducers/counterSlice";

export const store = configureStore({
  reducer: {
    sidebarState: counterReducer,
    authState: authReducer,
  },
});
