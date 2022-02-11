import { createSlice } from "@reduxjs/toolkit";

export const tableFilterSlice = createSlice({
  name: "tableFilter",
  initialState: 0,
  reducers: {
    setTableFilter: (state, action) => (state = action.payload),
    clearTableFilter: (state) => (state = 0),
  },
});

export const { setTableFilter, clearTableFilter } = tableFilterSlice.actions;

export const selectTableFilter = (state) => state.tableFilter;

export default tableFilterSlice.reducer;