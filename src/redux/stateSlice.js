import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  total: 0,
  available: 0,
};

export const stateSlice = createSlice({
  name: "state",
  initialState,
  reducers: {
    setTotal: (state, action) => {
      state.total = action.payload;
    },
    setAvailable: (state, action) => {
      state.available = action.payload;
    },
  },
});

export const { setTotal, setAvailable } = stateSlice.actions;

export default stateSlice.reducer;
