import { RootState } from './store/store';
import { DEFAULT_FORM_VALUES } from '../utils/constants';
import { Character } from '../types/Character';
import { Episode } from '../types/Episode';
import { FormInput } from '../types/FormInput';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCharacters, getEpisode } from 'rickmortyapi';

export interface CharactersState {
  characters: Character[];
  pageAmount: number;
  loading: boolean;
  error: string;
  currentFilters: FormInput;
}

interface EpisodeNames {
  [url: string]: string;
}

const initialState: CharactersState = {
  characters: [],
  pageAmount: 0,
  loading: false,
  error: '',
  currentFilters: DEFAULT_FORM_VALUES,
};

export const fetchCharacters = createAsyncThunk(
  'characters/fetchCharacters',
  async ({
    page = 1,
    filters = DEFAULT_FORM_VALUES,
  }: {
    page?: number;
    filters?: FormInput;
  }) => {
    const response = await getCharacters({
      page,
      name: filters.char_name,
      status: filters.char_status,
      species: filters.char_species,
      gender: filters.char_gender,
      type: filters.char_type,
    });
    let readyChars = response.data.results;
    const episodeIds = readyChars?.map((char) => {
      const id = char.episode[0].split('episode/')[1];

      return +id;
    });
    const episodeNames: EpisodeNames = {};
    if (episodeIds) {
      ((await getEpisode(episodeIds)).data as Episode[]).map((ep) => {
        episodeNames[ep.url] = ep.name;
      });
    }
    readyChars = readyChars?.map((char) => {
      return {
        ...char,
        firstSeen: episodeNames[char.episode[0]],
      };
    });

    return {
      results: readyChars,
      pages: response.data.info?.pages,
    };
  },
);

export const selectCharacters = (state: RootState) =>
  state.characters.characters;
