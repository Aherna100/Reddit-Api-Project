import { configureStore, combineReducers } from '@reduxjs/toolkit';
import navigationReducer from './NavigationSlice';

export const store = configureStore({
  reducer: combineReducers({
    navigation: navigationReducer
  }),
});
