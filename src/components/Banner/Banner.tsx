import { Typography, useTheme } from '@mui/material';

export const Banner = () => {
  const theme = useTheme();

  return (
    <Typography
      variant='h1'
      sx={{
        fontWeight: 900,
        height: 345,
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/background.png)`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        padding: theme.spacing(2),
        animation: `
          fadeIn 1s ease-out`,

        [theme.breakpoints.down('md')]: {
          fontSize: '4rem',
          textAlign: 'center'
        },
        [theme.breakpoints.down('sm')]: {
          fontSize: '3rem',
          textAlign: 'center'
        },
        [theme.breakpoints.down('xs')]: {
          fontSize: '2rem',
          textAlign: 'center'
        },
        '@keyframes fadeIn': {
          from: {
            opacity: 0,
            transform: 'translateY(-100%)',
          },
          to: {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
      }}
    >
      The Rick and Morty API
    </Typography>
  );
};
