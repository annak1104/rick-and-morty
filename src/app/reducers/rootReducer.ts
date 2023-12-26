import { combineReducers } from '@reduxjs/toolkit';
import { charactersReducer } from '../charactersSlice';

const rootReducer = combineReducers({
  characters: charactersReducer,
});

export default rootReducer;