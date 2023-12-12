import { Box, Typography, Link } from '@mui/material';
import styles from './Footer.module.scss';

const footerColor = '#202329';
const companyLogoPath = './companyLogo.png';

export const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: footerColor,
        height: 393,
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pt: 6,
        pb: 10,
      }}
      component='footer'
    >
      <Typography
        color='#9E9E9E'
        align='center'
        sx={{
          textTransform: 'uppercase',
          fontWeight: 700,
          fontSize: 13,
          lineHeight: '22px',
          width: 212,
          mb: '18px',
        }}
      >
        performed as part of a test case for the company
      </Typography>

      <Box
        component='span'
        sx={{
          width: '50px',
          height: '50px',
          m: 2,
          mb: '66px',
          boxShadow: '0px 0px 200px 20px rgba(255, 255, 255, 0.14) inset,0px 0px 200px 20px rgba(255, 255, 255, 0.4)',
          WebkitBoxShadow: '0px 0px 200px 200px rgba(255, 255, 255, 0.14) inset, 0px 0px 100px 20px rgba(255, 255, 255, 0.4)',
          MozBoxShadow: '0px 0px 200px 200px rgba(255, 255, 255, 0.14) inset, 0px 0px 100px 20px rgba(255, 255, 255, 0.4)',
        }}
      >
        <Link
          href="https://www.incode-group.com/"
          target='_blank'
        >
          <img
            src={companyLogoPath}
            alt='Company Logo'
            className={styles.companyLogo__image}
          />
        </Link>
      </Box>

      <Box
        sx={{
          display: 'flex',
          gap: '27px',
          mb: '23px',
        }}
      >
        <Link
          href="https://github.com/annak1104/fe_the_rick_and_morty"
          className={styles.links__item}
          target='_blank'
        >
          <img src='./icons/githab.png' alt='GitHub' />
        </Link>

        <Link
          href="https://twitter.com/rickandmortyapi"
          className={styles.links__item} 
          target='_blank'
        >
          <img src='./icons/twitter.png' alt='Twitter' />
        </Link>

        <Link
          href="https://rickandmortyapi.com/support-us/"
          className={styles.links__item}
          target='_blank'
        >
          <img src='./icons/support.png' alt='Support us' />
        </Link>
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: '29px',
        }}
      >
        <Typography color='#9E9E9E' variant='body2'>
          2023
        </Typography>
      </Box>
    </Box>
  );
};
