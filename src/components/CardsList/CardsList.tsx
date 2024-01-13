import { Box, CircularProgress } from '@mui/material';
import { CharacterCard } from '../CharacterCard/CharacterCard';
import {
  fetchCharacters,
  selectCharacters,
} from '../../app/charactersSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks/hooks';
import { useParams, useSearchParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { getCharacter } from '../../graphql-query';
export const CardsList = () => {
  const { currentFilters } = useAppSelector((state) => state.characters);
  const characters = useAppSelector(selectCharacters);
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;

  useEffect(() => {
    dispatch(fetchCharacters({ page, filters: currentFilters }));

    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [searchParams]);

  return (
    <Box
    sx={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '28px',
      pl: '20px',
      pr: '20px',
      mb: 1,'@media (max-width: 569px)': {
          gridTemplateColumns: '1fr',
        },
    }}
      >
     {characters.map((character) => (
        <CharacterCard character={character} key={character.id} />
      ))}
    </Box>
  );
};
