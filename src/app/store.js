import { configureStore } from '@reduxjs/toolkit';

const reducer = (state = '') => state;
export const store = configureStore({
  reducer: {
    reducer,
  },
});

export default store;
