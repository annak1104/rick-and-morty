import { Box } from '@mui/material';
import { CharacterCard } from '../CharacterCard/CharacterCard';
import { useAppSelector } from '../../app/hooks/hooks';
import { Character } from '../../types/Character';



export const CardsList = () => {
  const { characters } = useAppSelector(state => state.characters);
  
  return (
    <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '28px',
          mb: 1,
        }}
      >
     {characters.map((character: Character) => (
      <CharacterCard character={character} key={character.id} />
    ))}
      </Box>
  );
};