import { Typography, Box } from '@mui/material';
import { statusColors } from '../../utils/constants';

type Props = {
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
};

export const Status: React.FC<Props> = ({ status, species }) => {

  return (
    <Typography
      variant='body2'
      sx={{
        lineHeight: '26px',
      }}
    >
      <Box
        component='span'
        sx={{
          width: '9px',
          height: '9px',
          borderRadius: '50%',
          display: 'inline-block',
          marginRight: '7px',
          backgroundColor: statusColors[status],
        }}
      />

      <Typography
        component='span'
        sx={{
          textTransform: 'capitalize',
        }}
      >
        {`${status} - ${species}`}
      </Typography>
    </Typography>
  );
};
