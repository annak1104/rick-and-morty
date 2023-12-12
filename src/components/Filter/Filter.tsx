import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  ListItemText,
  MenuItem,
  Select,
  TextField
} from '@mui/material';
import { useState } from 'react';

export const Filter = () => {
  const [isShowFilter, setIsShowFilter] = useState(false);

  return (
    <Box
      sx={{
        color: '#272B33',
        display: 'flex',
        justifyContent: 'flex-start',
        gap: 20,
        width: 'clamp(600px, 100%, 1228px)',
        py: '22px',
        height: '56px',
      }}
    >
      <Button
        onClick={() => setIsShowFilter(!isShowFilter)}
        sx={{
          color: 'inherit',
          bgcolor: '#F5F5F5',
          textTransform: 'uppercase',
          width: '143px',
          height: '57px',
          ':hover': {
            bgcolor: '#D5D5D5',
          },
        }}
      >
        {isShowFilter ? 'Remove filter' : 'Filter'}
      </Button>

      {isShowFilter && (
        <><Select value='Select' sx={{ bgcolor: '#F5F5F5', zIndex: 1300 }}>
          <MenuItem value='Select' sx={{ display: 'none' }}>
            Select Item
          </MenuItem>

          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              labelPlacement='start'
              sx={{
                display: 'flex',
                pr: 2,
                justifyContent: 'space-between',
                textTransform: 'capitalize',
              }} label={undefined} />
          </FormGroup>
        </Select>
          <TextField
            id="outlined-basic"
            label="Add key words to find"
            variant="outlined"
          />
          <Button
            type='submit'
            sx={{
              color: 'inherit',
              bgcolor: '#F5F5F5',
              textTransform: 'uppercase',
              width: '143px',
              height: '57px',
              zIndex: 1301,
              ':hover': {
                bgcolor: '#D5D5D5',
              },
            }}
          >
            Find
          </Button></>
      )
      }
    </Box>
  );
};
