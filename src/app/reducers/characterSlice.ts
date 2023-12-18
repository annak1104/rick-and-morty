import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Character } from '../../types/Character';

interface CharactersState {
  characters: Character[];
}

const initialState: CharactersState = {
  characters: [],
};

const characterSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setCharacters: (state, action: PayloadAction<Character[]>) => {
      state.characters = action.payload;
    },
  },
});

export const { setCharacters } = characterSlice.actions;
export const charactersReducer = characterSlice.reducer;