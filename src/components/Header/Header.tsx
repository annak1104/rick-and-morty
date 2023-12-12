import { AppBar, IconButton, Toolbar } from '@mui/material';

export const Header = () => {
  return (
    <AppBar
      position='static'
      sx={{
        backgroundColor: 'white',
        boxShadow: 0,
      }}
    >
      <Toolbar variant='dense'>
        <IconButton
          edge='start'
          color='inherit'
          aria-label='menu'
          sx={{
            mr: 2,
            '&:hover': {
              boxShadow: '0px 3px 13px 0px rgba(23, 32, 49, 0.40)',
              animationName: 'button-add',
              animationDuration: '0.3s',
              animationTimingFunction: 'ease',
              animationIterationCount: 2,
              '@keyframes button-add': {
                '0%': {
                  transform: 'rotate(0deg)',
                },
                '25%': {
                  transform: 'rotate(-5deg)',
                },
                '50%': {
                  transform: 'rotate(5deg)',
                },
                '100%': {
                  transform: 'rotate(0)',
                },
              },
            },
          }}
        >
          <a href="/">
            <img src='./logo.svg' alt='logo' />
          </a>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};