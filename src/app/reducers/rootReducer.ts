import { combineReducers } from '@reduxjs/toolkit';
import { charactersReducer } from './characterSlice';

const rootReducer = combineReducers({
  characters: charactersReducer,
});

export default rootReducer;