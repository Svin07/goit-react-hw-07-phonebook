import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = { filter: '' };

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {
    addFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
