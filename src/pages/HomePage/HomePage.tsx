import { Box } from '@mui/material';
import { CardsList } from '../../components/CardsList/CardsList';
import { Filter } from '../../components/Filter/Filter';
import { PaginationComponent } from '../../components/PaginationComponent/PaginationComponent';
import FAB from '../../components/FAB/FAB';

export const HomePage = () => {
  return (
    <Box
      sx={{
        bgcolor: '#272B33',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Filter />
      <CardsList />
      <FAB />
      <PaginationComponent />
    </Box>
  );
};