import { configureStore } from '@reduxjs/toolkit'
import playerReducer from './features/playerSlice';

const Store = configureStore({
  reducer: {
    player:playerReducer
  },
});

export default Store;
