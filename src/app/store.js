import { configureStore } from '@reduxjs/toolkit';
import projectReducer from './projects';

export const store = configureStore({
  reducer: {
    project: projectReducer,
  },
});

export default store;
