import { Box } from '@mui/material';
import { CharacterCard } from '../CharacterCard/CharacterCard';
import { useAppSelector } from '../../app/hooks/hooks';
import { Character } from '../../types/Character';

export const CardsList = () => {
  const { characters } = useAppSelector(state => state.characters);
  console.log(characters, '123');

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '28px',
        pl: '20px',
        pr: '20px',
        mb: 1,
        '@media (max-width: 569px)': {
          gridTemplateColumns: '1fr',
        },
      }}
    >
      {characters.map((character: Character) => (
        <CharacterCard character={character} key={character.id} />
      ))}
    </Box>
  );
};
