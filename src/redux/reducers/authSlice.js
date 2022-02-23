import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

export const stateSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthenticated: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setAuthenticated } = stateSlice.actions;

export default stateSlice.reducer;
