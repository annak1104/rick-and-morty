import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { Character } from '../../types/Character';
import { Link } from 'react-router-dom';
import { Status } from '../Status/Status';

type Props = {
  character: Character;
};

export const CharacterCard: React.FC<Props> = ({ character }) => {

return (
  <Card
  sx={{
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', md: '230px 1fr' },
    width: { xs: 'calc(50% - 20px)', md: 600 },
    height: 'auto',
    bgcolor: '#3C3E44',
    color: '#F5F5F5',
    transition: 'box-shadow 0.3s ease',
    ':hover': {
      boxShadow: '3px 3px 10px 3px #000000',
      transition: 'transform 0.3s ease',
    },
    '@media (max-width: 1279px)': {
      width: '100%',
      gridTemplateColumns: '1fr',
    },
  }}
>
  <Link
    to={`./${character.id}`}
  >
    <CardMedia
      component='img'
      image={character.image}
      alt={'Image'}
      height='100%'
    />
  </Link>

  <CardContent
    sx={{
      padding: '13px',
    }}
  >
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        boxSizing: 'border-box',
      }}
    >
      <Box>
        <Typography
          component='div'
          sx={{
            fontWeight: 800,
            fontSize: 27,
            minHeight: 31,
            lineHeight: '100%',
            color: 'white',
          }}
        >
          <Link
             to={`./${character.id}`}
            style={{
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            {character.name}
          </Link>
        </Typography>
        <Status status={character.status} species={character.species} />
      </Box>

      <Box>
        <Typography
          variant='body2'
          color='#9E9E9E'
          sx={{
            fontWeight: 500,
          }}
        >
          Last known location:
        </Typography>

        <Typography variant='body1'>{character.location?.name}</Typography>
      </Box>

      <Box>
        <Typography
          variant='body2'
          color='#9E9E9E'
          sx={{
            fontWeight: 500,
          }}
        >
          First seen in:
        </Typography>

        <Typography variant='body1'>{character.firstSeen}</Typography>
      </Box>
    </Box>
  </CardContent>
</Card>
);
};