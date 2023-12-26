import { FilterKey } from '../../types/FilterKey';
import { DEFAULT_FORM_VALUES, FILTER_TEXT_FIELDS } from '../../utils/constants';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  TextField,
  FormControlLabel,
  FormGroup,
  MenuItem,
  Select,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Key, useState } from 'react';
import styles from './Filter.module.css';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  fetchCharacters,
  resetFilters,
  setFilters,
} from '../../app/charactersSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks/hooks';
import { FormInput } from '../../types/FormInput';
import { useSearchParams } from 'react-router-dom';

export const Filter = () => {
  const { currentFilters } = useAppSelector((state) => state.characters);
  const [isFilterVisible, setIsFilterVisible] = useState(
    currentFilters.character ||
    currentFilters.location ||
    currentFilters.episodes,
  );
  const [isItemOpen, setIsItemOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isBackDark, setIsBackDark] = useState(false);
  const [isFilterChecked, setIsFilterChecked] = useState({
    character: false,
    location: false,
    episodes: false,
  });
  const noFilter =
    !isFilterChecked.character &&
    !isFilterChecked.location &&
    !isFilterChecked.episodes;
  const { register, handleSubmit } = useForm({
    defaultValues: DEFAULT_FORM_VALUES,
  });
  const dispatch = useAppDispatch();

  const handleCheck = (key: FilterKey) => {
    setIsFilterChecked((prev) => {
      return {
        ...prev,
        [key]: !prev[key],
      };
    });
  };

  const handleClose = () => {
    setIsItemOpen(false);
  };

  const handleBackdropClick = () => {
    setIsItemOpen(false);
    setIsBackDark(false);
    setIsFilterChecked({
      character: false,
      location: false,
      episodes: false,
    });
  };

  const handleFilterClick = () => {
    if (isFilterVisible) {
      dispatch(fetchCharacters({}));
      dispatch(resetFilters());
      setSearchParams((searchParams: URLSearchParams) => {
        return {
          ...searchParams,
          page: 1,
        };
      });
    }
    setIsFilterVisible(!isFilterVisible);
  };

  const handleItemOpen = () => {
    setIsItemOpen(!isItemOpen);
    setIsBackDark(!isBackDark);
  };
  const onSubmit: SubmitHandler<FormInput> = (filters) => {
    dispatch(fetchCharacters({ page: 1, filters }));
    handleClose();
    dispatch(setFilters(filters));
    setIsBackDark(false);
    setSearchParams((searchParams: URLSearchParams) => {
      return {
        ...searchParams,
        page: 1,
      };
    });
    setIsFilterChecked({
      character: false,
      location: false,
      episodes: false,
    });
  };

  const theme = useTheme();

  return (
    <Box
      sx={{
        color: '#272B33',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: 'clamp(600px, 100%, 1228px)',
        py: '22px',
        gap: '150px',
        height: 'auto',
        '@media (max-width: 1279px)': {
          alignItems: 'center',
          width: '40%',
          flexDirection: 'column',
          gap: '20px',
        },
      }}
    >
      <Button
        onClick={handleFilterClick}
        sx={{
          color: 'inherit',
          bgcolor: '#F5F5F5',
          textTransform: 'uppercase',
          display: 'flex',
          justifyContent: 'center',
          height: '57px',
          width: '200px',
          '@media (max-width: 1279px)': {
            justifyContent: 'center',
            width: '100%',
            minWidth: '213px',
          },
          ':hover': {
            bgcolor: '#D5D5D5',
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
                transform: 'rotate(-1deg)',
              },
              '50%': {
                transform: 'rotate(1deg)',
              },
              '100%': {
                transform: 'rotate(0)',
              },
            },
          },
        }}
      >
        {isFilterVisible ? 'Remove filter' : 'Filter'}
      </Button>

      {isBackDark && (
        <Box
          onClick={() => handleBackdropClick()}
          sx={{
            position: 'fixed',
            bgcolor: 'rgba(0, 0, 0, 0.8)',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            zIndex: 1300,
          }}
        />
      )}

      {isFilterVisible && (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <FormControl
            focused={false}
            sx={{
              minWidth: '213px',
              height: '100%',
            }}
          >
            <Select
              value='Select'
              open={isItemOpen}
              onClick={handleItemOpen}
              autoWidth
              sx={{
                bgcolor: '#F5F5F5',
                zIndex: 1300,
              }}
            >
              <MenuItem
                value='Select'
                sx={{
                  display: 'none',
                  '@media (max-width: 1279px)': {
                    width: '200px',
                  },
                }}
              >
                Select Item
              </MenuItem>

              <FormGroup
                sx={{
                  // backgroundColor: 'red',
                  '@media (max-width: 1279px)': {
                  },
                }}
              >
                {Object.keys(FILTER_TEXT_FIELDS).map((key) => (
                  <FormControlLabel
                    key={key}
                    value={key}
                    control={<Checkbox />}
                    label={key}
                    checked={isFilterChecked[key as FilterKey]}
                    labelPlacement='start'
                    sx={{
                      display: 'flex',
                      pr: 2,
                      width: '194px',
                      justifyContent: 'space-between',
                      textTransform: 'capitalize',
                      '@media (max-width: 1279px)': {
                        width: '213px',
                      },
                    }}
                    {...register(`${key as 'character' | 'location' | 'episodes'}`, {
                      onChange: () => handleCheck(key as FilterKey),
                    })}
                  />
                ))}
              </FormGroup>
            </Select>
          </FormControl>

          <FormControl
            onClick={handleClose}
            sx={{
              height: '100%',
              bgcolor: '#F5F5F5',
              borderRadius: 1,
              zIndex: 1301,
              minWidth: '100%',
              [theme.breakpoints.up('md')]: {
                minWidth: '260px',
              },
            }}
          >
            {noFilter && (
              <MenuItem
                focusRipple={false}
                disableRipple={true}
                sx={{
                  height: '100%',
                  ':hover': {
                    bgcolor: 'inherit',
                    cursor: 'initial',
                    borderRadius: 1,
                  },
                }}
              >
                Add key words to find
              </MenuItem>
            )}
            <FormGroup
              sx={{
                borderRadius: 1,
                bgcolor: '#F5F5F5',
              }}
            >
              {Object.keys(FILTER_TEXT_FIELDS).map((filter) => (
                <>
                  {(isFilterChecked as any)[filter] &&
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    FILTER_TEXT_FIELDS[filter].map((field: { id: Key | null | undefined; value: any; text: any; }) => (
                      <TextField
                        key={field.id}
                        {...register(field.value)}
                        label={`Add ${filter} ${field.text}`}
                        variant='filled'
                        sx={{
                          zIndex: 1300,
                          '& .MuiFilledInput-root': {
                            background: '#F5F5F5',
                            borderRadius: 1,
                          },
                        }}
                        InputProps={{
                          disableUnderline: true,
                        }}
                      />
                    ))}
                </>
              ))}
            </FormGroup>
          </FormControl>

          <Button
            type='submit'
            sx={{
              color: 'inherit',
              bgcolor: '#F5F5F5',
              textTransform: 'uppercase',
              height: '57px',
              zIndex: 1301,
              width: '100%',
              minWidth: '213px',
              ':hover': {
                bgcolor: '#D5D5D5',
              },
            }}
          >
            Find
          </Button>
        </form>
      )}
    </Box>
  );
};
