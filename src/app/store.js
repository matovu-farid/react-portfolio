import { configureStore } from '@reduxjs/toolkit';
import projectReducer from './projects';

export const store = configureStore({
  reducer: {
    projects: projectReducer,
  },
});

export default store;
