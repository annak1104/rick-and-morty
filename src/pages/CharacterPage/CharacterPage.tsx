import React, { useEffect, useState } from 'react';
import { Box, Card, CardContent, CardMedia, Skeleton, Typography } from '@mui/material';
import { Status } from '../../components/Status/Status';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { getCharacter } from '../../graphql-query';
import { PageNotFound } from '../PageNotFound/PageNotFound';

export const CharacterPage = () => {
  const params = useParams();
  const characterId = +(useParams().characterId as string);
  const { data, error, loading } = useQuery(getCharacter(characterId));
  const character = data?.character || null;
  const [noSuchCharacter, setNoSuchCharacter] = useState(false);

  useEffect(() => {
    if (error) {
      // eslint-disable-next-line no-console
      console.error('Error fetching character:', error);
      setNoSuchCharacter(true);
    } else {
      setNoSuchCharacter(false);
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [error, params]);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        bgcolor: '#272B33',
      }}
    >
      {loading ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
          }}
        >
          <Skeleton
            variant="rectangular"
            animation="wave"
            sx={{
              bgcolor: 'grey.800',
              width: { xs: '100%', md: '80%' },
              height: { xs: '600px', md: '600px' },
            }}
          />
        </Box>
      ) : noSuchCharacter ? (
        <PageNotFound />
      ) : (
        <Card
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr', md: '1fr 1fr', lg: '1fr 1fr' },
            columnGap: '28px',
            bgcolor: '#3C3E44',
            color: '#F5F5F5',
            width: { xs: '100%', sm: '100%', md: '80%', lg: '75%' },
            margin: 'auto',
          }}
        >
          {character && character.image && (
            <CardMedia
              component="img"
              image={`${character.image}`}
              alt={`Image of ${character.name}`}
              width="100%"
              height={572}
            />
          )}

          <CardContent>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxSizing: 'border-box',
              }}
            >
              {character && (
                <Box>
                  <Typography
                    component="div"
                    sx={{
                      fontWeight: 800,
                      fontSize: 27,
                      height: 31,
                      lineHeight: '100%',
                    }}
                  >
                    {character.name}
                  </Typography>

                  <Status status={character.status} species={character.species} />
                </Box>
              )}

              {character && character.location && (
                <Box>
                  <Typography
                    variant="body2"
                    color="#9E9E9E"
                    sx={{
                      fontWeight: 500,
                      mt: '20px',
                    }}
                  >
                    Last known location:
                  </Typography>

                  <Typography variant="body1">{character.location.name}</Typography>
                </Box>
              )}

              {character && character.episode && character.episode[0] && (
                <Box>
                  <Typography
                    variant="body2"
                    color="#9E9E9E"
                    sx={{
                      fontWeight: 500,
                      mt: '20px',
                    }}
                  >
                    First seen in:
                  </Typography>

                  <Typography variant="body1">{character.episode[0].name}</Typography>
                </Box>
              )}
            </Box>

            {character && (
              <Box>
                <Typography
                  variant="body2"
                  color="#9E9E9E"
                  sx={{
                    fontWeight: 500,
                    mt: '20px',
                  }}
                >
                  Other Info
                </Typography>

                <Typography variant="body1">
                  The Mosaic Rooms are a leading non-profit arts organisation and bookshop dedicated
                  to supporting and promoting contemporary culture from the Arab world and beyond in
                  London. Established in 2009, as a project of the A.M. Qattan Foundation, it
                  dedicates its work to championing creative and critical voices that are often
                  underrepresented.
                </Typography>
              </Box>
            )}
          </CardContent>
        </Card>
      )}
    </Box>
  );
};

export default CharacterPage;
