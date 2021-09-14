import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  total: 0,
  inProgress: 0,
};

export const stateSlice = createSlice({
  name: "state",
  initialState,
  reducers: {
    setTotal: (state, action) => {
      state.total = action.payload;
    },
    setInProgress: (state, action) => {
      state.inProgress = action.payload;
    },
  },
});

export const { setTotal, setInProgress } = stateSlice.actions;

export default stateSlice.reducer;
