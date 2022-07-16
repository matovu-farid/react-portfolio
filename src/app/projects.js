import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import projects from './database';

const initialState = {
  all: [],
  loading: true,
};
const fetchProjects = createAsyncThunk(
  'projects',
  async () => {
    const response = await projects();
    return response;
  },
);

export const projectSlice = createSlice({
  name: 'project',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProjects.fulfilled, (state, action) => {
      state.all.push(...action.payload);
      state.loading = false;
    });
  },

});

// Action creators are generated for each case reducer function
export { fetchProjects };
export default projectSlice.reducer;
